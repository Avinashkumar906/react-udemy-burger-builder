import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from '../../configuration/axios'
import { ITEM_PRICE } from '../../constants/constants'

import css from './Checkout.css'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'

const Checkout = (props) => {

  const price = ITEM_PRICE;
  const BUN_PRICE = 30;
  const total = Object.keys(props.ingredients).reduce((a,b)=>a + (props.ingredients[b] * price[b]), BUN_PRICE);
  const items = Object.values(props.ingredients).reduce((a, b) => a+b, 0);
  const [orderPlaced, setOrderPlaced] = useState(false)
  
  const formik = useFormik(
    {
      initialValues:{
        fname:'',
        lname:'',
        email:'',
        address:'',
        ingredients:props.ingredients,
        total:total,
      },
      onSubmit:value =>{
        // if(formik.dirty && formik.isValid){
          axios.post('/orders.json', value)
          .then(
            res=>{
              setOrderPlaced(true);
              formik.resetForm();
              props.resetIngredients();
            }
          )
          .catch(
            err=>console.log(err)
          )
        // }
      }
    }
  )

  let content = 
    (<form onSubmit={formik.handleSubmit}>
      <Container maxWidth="sm">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}><br></br></Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Checkout</Typography>
          </Grid>
          <Grid item sm={6}>
            <TextField 
              id="fname"
              label="first name"
              type="text" 
              onChange={formik.handleChange}
              value={formik.values.fname} 
              fullWidth/>
          </Grid>
          <Grid item sm={6}>
            <TextField 
              id="lname"
              type="text"
              label="last name"
              onChange={formik.handleChange}
              value={formik.values.lname}
              fullWidth/>
          </Grid>
          <Grid item sm={12}>
            <TextField 
              id="email"
              type="email"
              label="Enter Email"
              rows="3"
              onChange={formik.handleChange}
              value={formik.values.email}
              fullWidth/>
          </Grid>
          <Grid item sm={12}>
            <TextField 
              id="address"
              type="address"
              label="Your address"
              onChange={formik.handleChange}
              value={formik.values.address}
              fullWidth/>
          </Grid>
          <Grid item sm={12}>
            <Button variant="contained" color="primary" type="submit">Place Order</Button>
          </Grid>
        </Grid>
      </Container>
    </form>)

  if(orderPlaced){
    content = 
    (<div className={css.container}>
      <h2>Order placed!</h2>
      <Link to="/orders" >
        <Button variant="contained" color="primary">View History</Button>
      </Link>
    </div>);
  } else if(!items){
    content = 
    (<div className={css.container}>
      <h2>No items in Burger!</h2>
      <Link to="/home" >
        <Button variant="contained" color="primary">Home</Button>
      </Link>
    </div>);
  }

  return (
    <div>
      {content}
    </div>
  )
}

const mapStateToProps = ({store}) =>({
  ingredients: store.ingredients
})

const mapDispatchToProps = dispatch => ({
  resetIngredients: () => dispatch({ type:'RESET' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
