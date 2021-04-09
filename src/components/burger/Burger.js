import React from 'react';

import css from './Burger.css';
import Ingredients from './ingredients/Ingredients'

const Burger = (props)=>{
  const ingredients = [];
  
  for(let key in props.ingredients){
    ingredients.push(...new Array(props.ingredients[key]).fill(key))
  }

  return (
    <div className={css.burgerContainer}>
      <Ingredients label={'top'}/>
      {ingredients.length ? ingredients.map((item,index) => <Ingredients key={item+"_"+index} label={item}/>) : <div className={css.m0}>Please add some Ingredients!</div>}
      <Ingredients label={'bottom'}/>
    </div>
  )
}

export default Burger