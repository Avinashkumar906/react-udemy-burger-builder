import React from 'react';
import { ITEM_PRICE } from '../../../constants/constants';

import css from './Summary.css';

const Summary = (props) => {
  
  const placeOrderHandler = () =>{
    console.log('order placed!')
  }
  const price = ITEM_PRICE;
  const BUN_PRICE = 30;
  const total = Object.keys(props.ingredients).reduce((a,b)=>a + (props.ingredients[b] * price[b]), BUN_PRICE);
  const itemsArr = Object.keys(props.ingredients).map((key)=>(
    {'title' :key, 'quantity':props.ingredients[key]}
  ));
  
  return (
    <div className={css.summary}>
      <span onClick={props.toggle} className={css.close}>X</span>
      <h3>Summary of delecious burger.</h3>
      <ul>
        {itemsArr
          .map((item)=>(
            <li key={item.title}>
              <p>
                <strong>{item.title}</strong> : {item.quantity}.
              </p>
            </li>)
          )
        }
      </ul><br/>
      <p onClick={placeOrderHandler} className={css.proceed}>
        <span>Proceed to pay: {total}/- </span> 
      </p>
    </div>
  )
}

export default Summary;