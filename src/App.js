import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Layout from './components/layout/Layout';
import Checkout from './components/checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App(props) {
  // console.log(props)
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
