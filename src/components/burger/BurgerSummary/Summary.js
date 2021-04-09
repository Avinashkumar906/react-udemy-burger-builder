import React from 'react';

import css from './Summary.css';

const Summary = (props) => {
  const itemsArr = Object.keys(props.ingredients).map((key)=>(
    {'title' :key, 'quantity':props.ingredients[key]}
  ));
  
  return (
    <div className={css.summary}>
      <span onClick={props.toggle} className={css.close}>X</span>
      <h3>Summary of delecious burger.</h3>
      <ul>
        {itemsArr.map((item)=><li key={item.title}><p><strong>{item.title}</strong> : {item.quantity}.</p></li>)}
      </ul><br/>
      <p onClick={props.placeOrder} className={css.proceed}>
        <span>Rs: {props.total}/- </span> 
        <span>Proceed</span>
      </p>
    </div>
  )
}

export default Summary;