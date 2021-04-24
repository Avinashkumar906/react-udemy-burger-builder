import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom'
import { Drawer, IconButton, List, ListItem, Link } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

import css from './Sidebar.css'

const NAV_ITEMS = [
  {title: 'Home', link: '/home'},
  {title: 'Orders', link: '/orders'},
  {title: 'Checkout', link: '/checkout'},
];

const Sidebar = (props) => {

  return (
    <Drawer open={props.active} className={css.mobileOnly}>
      <IconButton onClick={props.click} className={css.closeIcon}>
        <CloseIcon/>
      </IconButton>
      <List className={css.min400}>
        {
          NAV_ITEMS.map((item)=>(
            <ListItem key={`sidebar_${item.title}`}>
              <Link component={RouterLink} to={item.link}>
                {item.title}
              </Link>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  )
}

export default Sidebar;