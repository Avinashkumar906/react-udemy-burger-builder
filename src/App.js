import React from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'

import Layout from './components/layout/Layout';
import Checkout from './components/checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Login from './components/auth/Login'
import './App.css'

function App(props) {
  return (
    <BrowserRouter>
      
      <Layout>
        <Route path="/home" component={BurgerBuilder} />
        <Route path="/orders" render={()=><h2>COMMING SOON!</h2>}/>
        <Route path="/checkout" component={Checkout}/>
        <Route exact path="/">
          <Redirect from="/" to="/home" />
        </Route>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
