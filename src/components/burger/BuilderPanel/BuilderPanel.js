import React from 'react';

import css from './BuilderPanel.css';
import { ITEM_PRICE } from '../../../constants/constants'

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
      <span>Builder Panel</span>
      <div className={css.flex}>
        <div>
          {panelItems.map((item)=>(
            <div key={item.title} className={css.panelItem}>
              <span 
                className={css.more} 
                onClick={() => props.add(item.type)}>More
              </span>
              <span className={css.title}>{item.title}</span>
              <span 
                className={props.ingredients[item.type] ? css.less : css.disable} 
                onClick={() => props.less(item.type)}>Less
              </span>
            </div>
          ))}
        </div>
        <div>
            <p>
              <span>Total : Rs. {total}/- </span>
              <span 
                className={total > BUN_PRICE? css.more : css.disable} 
                onClick={props.toggle}>Checkout!
              </span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default BuilderPanel;