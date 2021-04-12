import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from '../../configuration/axios'
import { ITEM_PRICE } from '../../constants/constants'

import css from './Checkout.css'

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
        axios.post('/orders.json',value)
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
      }
    }
  )

  let content = 
    (<div className={css.container}>
      <h2>Checkout page!</h2>   
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.inputGroup50}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fname}
          />
        </div>
        <div className={css.inputGroup50}>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lname}
          />
        </div>
        <div className={css.inputGroup100}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className={css.inputGroup100}>
          <label htmlFor="name">Your Address</label>
          <textarea
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address} />
        </div>
        <div className={css.inputGroup100}>
          <label htmlFor="name"></label>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>)

  if(orderPlaced){
    content = 
    (<div className={css.container}>
      <h2>Order placed!</h2>
      <Link className={css.btnCustom} to="/orders" >View History</Link>
    </div>);
  } else if(!items){
    content = 
    (<div className={css.container}>
      <h2>No items in Burger!</h2>
      <Link className={css.btnCustom} to="/home" >Home</Link>
    </div>);
  }

  return (
    <div>
      {content}
    </div>
  )
}

const mapStateToProps = state =>({
  ingredients: state.ingredients
})

const mapDispatchToProps = dispatch => ({
  resetIngredients: () => dispatch({ type:'RESET' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
