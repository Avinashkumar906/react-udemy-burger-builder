import React, { Component } from 'react'
import { Box, Card, CardContent, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import axios from '../../configuration/axios';
import Burger from '../burger/Burger';

export default class Order extends Component {

  state = {
    orderList : [],
    currendOrder: {},
  }

  
  componentDidMount(){
    // debugger
    axios.get('/orders.json')
    .then(
      (res) => {
        if(!res.data) return new Error('No order history!') ;
        let orderList = [];
        for (const key in res.data) {
          orderList.push({...res.data[key], key});
        }
        this.setState({ orderList: orderList, currendOrder: orderList[0] })
      }
      )
      .catch(err => console.log(err))
    }
    
    viewOrderHandler(key){
      let currentOrder = this.state.orderList.find((item) => item.key === key);
      this.setState({currendOrder: currentOrder})
    }
    
    render() {
    return (
      <Grid container>
        {
          this.state.orderList.length ? 
          <Grid md={4} item>
            <Container>
              <List style={{'width':'100%'}}>
                {this.state.orderList
                  .map((item)=>(
                    <ListItem button key={item.key} onClick={() => this.viewOrderHandler(item.key)}>
                      <ListItemText>Order ID: {item.key}</ListItemText>
                      <ListItemIcon><KeyboardArrowRightIcon /></ListItemIcon>
                    </ListItem>
                  ))
                }
            </List>
            </Container>
          </Grid> :
          null
        }
        {
          this.state.currendOrder?.key ?
          <Grid md={8} item style={{'paddingTop':'16px'}}>
            <Container maxWidth="md" justify="center">
              <Typography variant="h6">
                Order ID: {this.state.currendOrder?.key}
              </Typography>
              <Typography variant="caption">By: {this.state.currendOrder?.fname} {this.state.currendOrder?.lname}</Typography>
              <Grid item style={{'maxHeight':'600px','overflow':'auto'}}>
                <Burger ingredients={this.state.currendOrder?.ingredients}></Burger>
              </Grid>
              <Typography variant="subtitle1">
                Total: {this.state.currendOrder?.total}/- Rupees.
              </Typography>
              <Typography variant="subtitle1">
                Address: {this.state.currendOrder?.address}
              </Typography>
            </Container>
          </Grid> :
          null
        }
      </Grid>
    )
  }
}
