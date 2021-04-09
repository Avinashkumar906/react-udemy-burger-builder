import React from 'react';

import css from './Sidebar.css'
import Backdrop from '../../hoc/Backdrop'

const Sidebar = (props) => {
  let toggleClass = props.active ? [ css.sidebar, css.active] : [css.sidebar];

  return (
    <div>
      <Backdrop show={props.active}/>
      <div className={toggleClass.join(' ')}>
        <div onClick={props.click} className={css.close}>
          <span className={css.span1}></span>
          <span className={css.span2}></span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;