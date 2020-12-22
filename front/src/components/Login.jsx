import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useInput} from '../hooks/input';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/actions/auth'
// Material UI
import {Avatar, Button, CssBaseline, TextField,  Grid, Typography, Container, LinearProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Styles
import {FormStyles} from '../assets/FormStyles'

const Login = () => {
  const classes = FormStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Local State
  const {value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const {value: password, bind: bindPassword, reset: resetPassword} = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Store
  const isLogged = useSelector((state) => state.auth.logged)
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(login({email, password})).then(() => {
      if(isLogged){
        setIsLoading(false);
        resetEmail();
        resetPassword();
        history.push('/');
      }
    }).catch(() => {
      setError(true); 
      setTimeout(() => setError(false), 3000); 
      setIsLoading(false)})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...bindEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...bindPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {isLoading ?  <><LinearProgress /><br/></> : null}
          {error &&  <Alert severity="error">Email or Password incorrect</Alert>}
          <Grid container>
            <Grid item>
              <Link to='/register' className={classes.linkDeco}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login