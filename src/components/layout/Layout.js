import React, { useState } from 'react';

import Wrapper from '../hoc/Wrapper';
import css from './Layout.css'
import Nav from '../navigation/Nav/Nav'
import Sidebar from '../navigation/Sidebar/Sidebar'

const Layout = (props)=>{

  const [sidebarState, setSidebarState] = useState(false);
  const toggleSidebarHandler = ()=>{
    console.log('clicked')
    setSidebarState((prevState)=>!prevState);
  } 

  return (
    <Wrapper>
      <Nav toggleSidebar={() => toggleSidebarHandler()}></Nav>

      <div className={css.mobileOnly}>
        <Sidebar click={toggleSidebarHandler} active={sidebarState}></Sidebar>
      </div>

      <div className={css.layout}>
        {props.children}
      </div>
    </Wrapper>
  )
}

export default Layout;