import React from 'react';

import css from './BuilderPanel.css';
import { ITEM_PRICE } from '../../../constants/constants'
import { Button, Chip, Typography } from '@material-ui/core';

const panelItems = [{
    title: 'Cheese',
    type: 'cheese'
  },
  {
    title: 'Meat',
    type: 'meat'
  },
  {
    title: 'Salad',
    type: 'salad'
  },
]

const BuilderPanel = (props) => {
  
  const price = ITEM_PRICE;
  const BUN_PRICE = 30;
  const total = Object.keys(props.ingredients).reduce((a,b)=>a + (props.ingredients[b] * price[b]), BUN_PRICE);

  return (
    <div className={css.container}>
      <Typography variant="h4" align="center">Builder Panel</Typography>
      <div className={css.flex}>
        <div>
          {panelItems.map((item)=>(
            <div key={item.title} className={css.panelItem}>
              <Button  variant="contained" color="secondary" onClick={() => props.add(item.type)}>
                <span>More</span> 
              </Button>
              <span className={css.title}>{item.title}</span>
              <Button variant="contained" color="secondary" disabled={!props.ingredients[item.type]} onClick={() => props.less(item.type)}>
                <span>Less</span>
              </Button>
            </div>
          ))}
          <div  style={{'textAlign':'center'}} >
              <Typography variant="h6">Total : Rs. {total}/- </Typography>
              <Button variant="contained" color="primary" disabled={!(total > BUN_PRICE)} onClick={props.toggle}>
                Checkout!
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuilderPanel;