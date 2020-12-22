import React, {useState} from 'react';
import {useInput} from '../hooks/input';
import {useDispatch} from 'react-redux';
import {register} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';
// Material UI
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, LinearProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Styles
import {FormStyles} from '../assets/FormStyles';

const Register = () => {
  const classes = FormStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Local State
  const { value: name, bind: bindName, reset: resetName} = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(register({name, email, password})).then(() => {
      resetName();
      resetEmail();
      resetPassword();
      setIsLoading(false);
      history.push('/login');
    }).catch(() => {setError(true); setIsLoading(false)})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            {...bindName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            Sign Up
          </Button>
          {isLoading ?  <><LinearProgress /><br/></> : null}
          {error &&  <Alert severity="error">Name or Email already exists</Alert>}
          <Grid container>
         
            <Grid item>
              <Link to='/login' className={classes.linkDeco}>
                {"I already have an account."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register