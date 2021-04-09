import React from 'react';

import css from './Hoc.css'

const Backdrop = (props)=>{
  const show = props.show ? css.backdrop : css.none;
  return <div className={show}></div>
}

export default Backdrop;