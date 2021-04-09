import React, { useState } from 'react';

import Wrapper from '../hoc/Wrapper';
import css from './Layout.css'
import Nav from '../navigation/Nav/Nav'
import Sidebar from '../navigation/Sidebar/Sidebar'

const Layout = (props)=>{

  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebarHandler = ()=>{
    setSidebarState((prevState)=>!prevState);
  } 

  return (
    <Wrapper>

      <div className={css.navContainer}>
        <div className={css.menu} onClick={toggleSidebarHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={css.desktopOnly}>
          <Nav></Nav>
        </div>
      </div>

      <div className={css.mobileOnly}>
        <Sidebar click={toggleSidebarHandler} active={sidebarState}></Sidebar>
      </div>

      <div className={css.layout}>
        {props.children}
      </div>
    </Wrapper>
  )
}

export default Layout