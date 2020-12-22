import React, {useState} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {useInput} from '../hooks/input';
import { useDispatch, useSelector} from 'react-redux';
import {addFeature} from '../redux/actions/features'
// Material UI
import { Button, CssBaseline, TextField, Typography, Container, LinearProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Styles
import {FormStyles} from '../assets/FormStyles'

const defaultImg = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const FeatureForm = () => {
  const {id} = useParams();
  const classes = FormStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Local State
  const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');
  const {value: image, bind: bindImage, reset: resetImage} = useInput(defaultImg);
  const {value: description, bind: bindDescription, reset: resetDescription} = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // Store
  const tool = useSelector(state => state.tools.tool)
  
  const handleSubmit = (evt) => {
    let uniqueFt = tool.Features && tool.Features.filter(f => f.title === title)
    evt.preventDefault();
    if(uniqueFt.length > 0) {
      setError(true);
      resetTitle();
      resetImage();
      resetDescription();
      setIsLoading(true);
      setTimeout(() => {setError(false);  setIsLoading(false)}, 3000); 
     }
    else {
    dispatch(addFeature(id, {title, image, description})).then(() => {
        setIsLoading(false);
        resetTitle();
        resetImage();
        resetDescription();
        history.goBack()
      }).catch(() => {setError(true); setIsLoading(false)})}
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
          <Button
            fullWidth
            variant="contained"
            color="default"
            className={classes.back}
            onClick={() => history.goBack()}
          >
           Go Back
          </Button>
          {isLoading ?  <><LinearProgress /><br/></> : null}
          {error &&  <Alert severity="error">This feature already exists</Alert> }
        </form>
      </div>
    </Container>
  );
}

export default FeatureForm