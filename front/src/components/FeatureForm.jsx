import React, {useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useInput} from '../hooks/input';
import {useSelector, useDispatch} from 'react-redux';
import {addFeature} from '../redux/actions/features'
// Material UI
import { Button, CssBaseline, TextField, Typography, Container, LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkDeco : {
    textDecoration: "none"
  }
}));

const defaultImg = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const FeatureForm = () => {
  const {id} = useParams();
  const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');
  const {value: image, bind: bindImage, reset: resetImage} = useInput(defaultImg);
  const {value: description, bind: bindDescription, reset: resetDescription} = useInput('');

  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(addFeature(id, {title, image, description})).then(() => {
        history.push('/');
        setIsLoading(false);
        resetTitle();
        resetImage();
        resetDescription();
      })
    }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add new feature
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
           <TextField
            margin="normal"
          id="outlined-multiline-static"
          label="Description"
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          {...bindDescription}
        />
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
         
        </form>
      </div>
    </Container>
  );
}

export default FeatureForm