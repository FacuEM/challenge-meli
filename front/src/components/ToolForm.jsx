import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
import {useInput} from '../hooks/input';
import { useDispatch} from 'react-redux';
import {addTool} from '../redux/actions/tools'
// Material UI
import { Button, CssBaseline, TextField, Typography, Container, LinearProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Styles
import {FormStyles} from '../assets/FormStyles'

const defaultImg = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const ToolForm = () => {
  const classes = FormStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Local State
  const {value: image, bind: bindImage, reset: resetImage} = useInput(defaultImg);
  const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(addTool({title, image})).then(() => { 
        setIsLoading(false);
        resetTitle();
        resetImage();
        history.push('/');
      }).catch(() => {setError(true); setIsLoading(false)})
    }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add new tool
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            type="text"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            {...bindTitle}
          />
             <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
    name='image'
  />
</Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          {isLoading ?  <LinearProgress /> : null}
          {error &&  <Alert severity="error">This tool already exists</Alert> }
        </form>
      </div>
    </Container>
  );
}

export default ToolForm


/*
<TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="image"
            label="image"
            type="text"
            id="image"
            autoComplete="image"
            {...bindImage}
          />
          */