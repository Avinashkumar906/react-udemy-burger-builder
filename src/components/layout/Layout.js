import React, { useState } from 'react';

import Wrapper from '../hoc/Wrapper';
import css from './Layout.css'
import Nav from '../navigation/Nav/Nav'
import Sidebar from '../navigation/Sidebar/Sidebar'
import { Container } from '@material-ui/core';

const Layout = (props)=>{

  const [sidebarState, setSidebarState] = useState(false);
  const toggleSidebarHandler = ()=>{
    console.log('clicked')
    setSidebarState((prevState)=>!prevState);
  } 

  return (
    <Wrapper>
      <Nav toggleSidebar={() => toggleSidebarHandler()}></Nav>

      <Container className={css.mobileOnly}>
        <Sidebar click={toggleSidebarHandler} active={sidebarState}></Sidebar>
      </Container>

      <Container>
        {props.children}
      </Container>
    </Wrapper>
  )
}

export default Layout;