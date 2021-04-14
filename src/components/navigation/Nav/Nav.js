import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Button, Typography, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import css from './Nav.css'

const NAV_ITEMS = [
  {title: 'Home', link: '/home'},
  {title: 'Orders', link: '/orders'},
  {title: 'Checkout', link: '/checkout'},
];

const Nav = (props) => {
  return (
    <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={css.mobileOnly} edge="start" color="inherit" aria-label="menu" onClick={props.toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{'flexGrow':1}} >
            {NAV_ITEMS.map((item)=>
              <Button component={RouterLink} key={`${item.title}_navitem`} className={css.desktopOnly} to={item.link} color="inherit">{item.title}</Button>)
            }
          </Typography>
          <IconButton component={RouterLink} to="/login" edge="start" color="inherit"> 
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
} 

export default Nav;