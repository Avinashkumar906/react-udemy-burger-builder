import React from 'react';

import Backdrop from './Backdrop';
import Wrapper from './Wrapper';
import css from './Hoc.css'

const Modal = (props)=>{
  const isActive =  props.active ? [css.modalContainer, css.active] : [css.modalContainer]
  return (
    <Wrapper>
      <Backdrop show={props.active}></Backdrop>
      <div className={isActive.join(' ')}>
        <div className={css.modal}>
          {props.children}
        </div>
      </div>
    </Wrapper>
  )
}

export default Modal;