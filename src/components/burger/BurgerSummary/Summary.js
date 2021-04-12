import React from 'react';
import { ITEM_PRICE } from '../../../constants/constants';
import { Link } from 'react-router-dom'
import Burger from '../Burger'

import css from './Summary.css';

const Summary = (props) => {
  
  const price = ITEM_PRICE;
  const BUN_PRICE = 30;
  const total = Object.keys(props.ingredients).reduce((a,b)=>a + (props.ingredients[b] * price[b]), BUN_PRICE);
  const itemsArr = Object.keys(props.ingredients).map((key)=>(
    {'title' :key, 'quantity':props.ingredients[key]}
  ));
  
  return (
    <div className={css.summary}>
      <span onClick={props.toggle} className={css.close}>X</span>
      <h3>Checkout summary</h3>
      <div className={css.burgerContainer}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <div className={css.itemsContainer}>
        {itemsArr
          .map((item)=>(
            <li key={item.title}>
              <strong>{item.title} : {item.quantity}</strong>
            </li>)
          )
        }
      </div>
      <p className={css.proceed}>
        <Link to="/checkout">
          <span>Proceed to pay: {total}/- </span> 
        </Link>
      </p>
    </div>
  )
}

export default Summary;