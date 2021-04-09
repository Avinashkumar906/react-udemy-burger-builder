import React, { Component } from 'react';

import Burger from '../../components/burger/Burger';
import Wrapper from '../../components/hoc/Wrapper';
import Modal from '../../components/hoc/Modal'
import Summary from '../../components/burger/BurgerSummary/Summary'
import BuilderPanel from '../../components/burger/BuilderPanel/BuilderPanel';
import { connect } from 'react-redux'
import { ITEM_PRICE } from '../../constants/constants'

const INIT_VALUE = {
  total: 20,
  purchasable: false,
  purchasing: false,
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  // };
  state = INIT_VALUE;

  
  isPurchasable(){
    const ingredients = Object.values(this.state.ingredients).reduce((a,b)=>a+b);
    this.setState({purchasable: ingredients > 0})
  }
  
  toggleModalHandler = () => {
    const currentState = this.state.purchasing;
    this.setState({purchasing:!currentState})
  }
  
  placeOrcer = () => {
    alert("Order Place !");
    this.setState(INIT_VALUE);
  }
  
  
  removeItemHandler = (type) => {
    if(this.state.ingredients[type]){
      const ingredients = {...this.state.ingredients}
      ingredients[type] -= 1;
      let total = this.state.total - ITEM_PRICE[type];
      this.setState({ingredients,total},()=>this.isPurchasable());
    }
  }
  
  render (){
    // console.log("Props from Burgerbuilder",this.props);
    return (
      <Wrapper>
        <Modal active={this.state.purchasing}><Summary placeOrder={this.placeOrcer} toggle={this.toggleModalHandler} ingredients={this.props.ingredients} total={this.state.total} /></Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuilderPanel toggle={this.toggleModalHandler} purchasable={this.state.purchasable} price={this.state.total} add={this.props.addItemHandler} less={this.props.removeItemHandler} ingredients={this.props.ingredients}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = state =>(
  {ingredients : state.ingredients}
);

const mapDispatchToProps = dispatch => ({
  addItemHandler : (payload) => dispatch({type:'ADD_ITEM', payload:payload}),
  removeItemHandler : (payload) => dispatch({type:'LESS_ITEM', payload:payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);