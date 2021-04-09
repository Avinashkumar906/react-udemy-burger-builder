import React from 'react';

import css from './Ingredients.css';

const Ingredients = props => {    
    return <div className={css[props.label]}></div>;
  }

export default Ingredients;