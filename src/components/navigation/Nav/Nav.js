import React from 'react';
import { Link } from 'react-router-dom'

import css from './Nav.css'

const NAV_ITEMS = [
  {title: 'Home', link: '/home'},
  {title: 'History', link: '/orders'},
];

const nav = () => {
  return (
    <nav className={css.navigation}>
      <ul>
        {NAV_ITEMS
          .map((item) => (
            <li 
              key={item.title} 
              className={css.active}>
              <Link to={item.link}>{item.title}</Link>
            </li>
            )
          )
        }
      </ul>
    </nav>
  )
} 

export default nav;