import React from 'react'
import firebase from 'firebase'
import { useFormik } from 'formik'

const Login = () => {

  const formik = useFormik({
    initialValues:{
      email:null,
      password:null,
    },
    validate:values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
      }
      return errors;
    },
    onSubmit:values => console.log(values),
    // initialErrors: {message:'all fields reuired'}
    // isValid:false,
  },)

  // firebase.auth()
  //   .signInWithEmailAndPassword('test@test.com','Test@123')
  //   .then(
  //     res=>console.log(res),
  //     err=>console.log(err)
  //   )

  return (
    <div>
          { formik.dirty && formik.isValid ? 'true' : 'false'}
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
        </div>
        <span>{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</span>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <span>{formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}</span>
      </form>
    </div>
  )
}

export default Login
