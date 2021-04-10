import React from 'react';
import { Link } from 'react-router-dom'

import css from './Sidebar.css'
import Backdrop from '../../hoc/Backdrop'

const NAV_ITEMS = [
  {title: 'Home', link: '/home'},
  {title: 'History', link: '/orders'},
];

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
        <div className={css.navBar}>
          <ul>
            {NAV_ITEMS
              .map((item)=>
                (
                  <li key={item.title}><Link to={item.link}>{item.title}</Link></li>
                )
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;