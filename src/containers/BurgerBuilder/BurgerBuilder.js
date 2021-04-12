import React, { Component } from 'react';

import Burger from '../../components/burger/Burger';
import Wrapper from '../../components/hoc/Wrapper';
import Modal from '../../components/hoc/Modal'
import Summary from '../../components/burger/BurgerSummary/Summary'
import BuilderPanel from '../../components/burger/BuilderPanel/BuilderPanel';
import { connect } from 'react-redux'

const INIT_VALUE = {
  purchasable: false,
  purchasing: false,
}

class BurgerBuilder extends Component {

  state = INIT_VALUE;
  
  toggleModalHandler = () => {
    const currentState = this.state.purchasing;
    this.setState({purchasing:!currentState})
  }
   
  render (){
    // console.log("Props from Burgerbuilder",this.props);
    return (
      <Wrapper>
        <Modal active={this.state.purchasing}>
          <Summary 
            toggle={this.toggleModalHandler} 
            ingredients={this.props.ingredients} 
            total={this.state.total} />
        </Modal>
        <div style={{'height':'300px','overflow':'auto'}}>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <BuilderPanel 
          toggle={this.toggleModalHandler} 
          add={this.props.addItemHandler} 
          less={this.props.removeItemHandler} 
          ingredients={this.props.ingredients}/>
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