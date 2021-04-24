import React from 'react'
import firebase from 'firebase'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const UserAuth = (props) => {

  let { action } = props.match.params;

  if((action !== 'signin' && action !== 'signup') || !action){
    props.history.replace('/user/signin');
    action = 'signin';
  }

  const toggleHandler = () => {
    if (action === 'signin') {
      props.history.replace('/user/signup'); 
    } else {
      props.history.replace('/user/signin');
    }
  }

  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validate:values => {
      const errors = {};
      values.email = values.email.trim();
      values.password = values.password.trim();
      if (!values.email || values.email === '') {
        errors.email = 'Required field';
      }
      if (!values.password || values.password === '') {
        errors.password = 'Required field';
      } else if (values.password.length < 8) {
        errors.password = 'Less than 8 character.';
      }
      return errors;
    },
    onSubmit: values => submitForm(values),
  },)

  function submitForm(values){
    if (action === 'signin'){
      firebase.auth()
        .signInWithEmailAndPassword(values.email,values.password)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    } else {
      firebase.auth()
        .createUserWithEmailAndPassword(values.email,values.password)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  }

  return (
    !props.user ?
    <form onSubmit={formik.handleSubmit}>
      <Container maxWidth="sm">
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}><br></br></Grid>
          <Grid item xs={12}>
            <Typography variant="h3">{action === 'signin' ? 'Sign In' : 'Sign Up'}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField 
            id="email" type="mail" 
            label="Your Username" 
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email ? true : false}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : 'Enter email if don\'t have username.'}
            value={formik.values.email} fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="password" 
              type="password" label="Your Password" 
              error={formik.touched.password && formik.errors.password ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password ? formik.errors.password : "Enter Your password." }
              value={formik.values.password} fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
            <Button 
              style={{'margin':'10px'}}
              type="submit" 
              disabled={!(formik.dirty && formik.isValid)} 
              variant="contained" color="primary">
                {action === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
            <Button 
              type="button" 
              onClick={toggleHandler}
              style={{'margin':'10px'}}
              variant="contained" color="secondary">
                {action !== 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </form> :
    <Redirect to="/home"/>
  )
}

const mapStateToProps = ({user}) =>(
  {user : user}
);

const mapDispatchToProps = dispatch => ({
  addUserHandler : (payload) => dispatch({type:'ADD_USER', payload:payload}),
  removeUserHandler : () => dispatch({type:'REMOVE_USER'})
});

export default connect(mapStateToProps,mapDispatchToProps)(UserAuth)
