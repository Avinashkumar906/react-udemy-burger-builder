import React, { Component } from 'react';

import Burger from '../../components/burger/Burger';
import Wrapper from '../../components/hoc/Wrapper';
import Modal from '../../components/hoc/Modal';
import Summary from '../../components/burger/BurgerSummary/Summary'
import BuilderPanel from '../../components/burger/BuilderPanel/BuilderPanel';
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core';

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
        <Grid container alignItems="center" justify="center" style={{'minHeight':'90vh'}}>
          <Grid item sm={6} style={{'width':'100%'}}>
            <div style={{'display':'flex','height':'600px','overflow':'auto'}}>
              <Burger ingredients={this.props.ingredients} />
            </div>
          </Grid>
          <Grid item sm={6} >
            <BuilderPanel 
              toggle={this.toggleModalHandler} 
              add={this.props.addItemHandler} 
              less={this.props.removeItemHandler} 
              ingredients={this.props.ingredients}/>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({store}) =>(
  {ingredients : store.ingredients}
);

const mapDispatchToProps = dispatch => ({
  addItemHandler : (payload) => dispatch({type:'ADD_ITEM', payload:payload}),
  removeItemHandler : (payload) => dispatch({type:'LESS_ITEM', payload:payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);