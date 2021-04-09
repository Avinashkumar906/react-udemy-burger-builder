import React from 'react';

import css from './Nav.css'

const NAV_ITEMS = [
  {title: 'Home', link: '/'},
  {title: 'History', link: '/'},
];

const Nav = (props) => (
  <nav className={css.navigation}>
    <ul>
      {NAV_ITEMS.map((item) => <li key={item.title} className={css.active}><a href={item.link}>{item.title}</a></li>)}
    </ul>
  </nav>
)

export default Nav;