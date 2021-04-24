import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'

import firebase from 'firebase';
import { connect } from 'react-redux';
import Userauth from './components/auth/UserAuth';
import Layout from './components/layout/Layout';
import Checkout from './components/checkout/Checkout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Order from './components/history/order'
import './App.css';

function App(props) {
  // change of user in auththentication
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        props.addUserHandler(user);
      }
      else
        props.removeUserHandler();
    })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Route path="/home" component={BurgerBuilder} />
        <Route path="/orders" component={Order}/>
        <Route path="/checkout" component={Checkout}/>
        <Route exact path="/user/:action" component={Userauth} />
        <Route exact path="/user" component={Userauth} />
        <Route exact path="/">
          <Redirect from="/" to="/home" />
        </Route>
      </Layout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => ({
  addUserHandler : (payload) => dispatch({type:'ADD_USER', payload:payload}),
  removeUserHandler : () => dispatch({type:'REMOVE_USER'})
});

export default connect(null, mapDispatchToProps)(App);
