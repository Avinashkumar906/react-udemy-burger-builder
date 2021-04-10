import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import axios from 'axios'

import css from './Checkout.css'

const Checkout = (props) => {
  
  const [orderPlaced, setOrderPlaced] = useState(false)
  
  const formik = useFormik(
    {
      initialValues:{
        fname:'',
        lname:'',
        email:'',
        address:''
      },
      onSubmit:value =>{
        axios.post('https://react-6302e-default-rtdb.firebaseio.com/orders.json',value)
          .then(
            res=>{
              setOrderPlaced(true);
              formik.resetForm()
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
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default Checkout
