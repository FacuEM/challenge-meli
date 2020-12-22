import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {fetchSingleFeature} from '../redux/actions/features';
import {useSelector, useDispatch} from 'react-redux';
import {fetchStarsFt, addPriorityFt} from '../redux/actions/priority';
import {priorityAvg} from '../aux/index'
// Material UI
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
// Style
import {FeatureStyles} from '../assets/ExtraStyle'
// Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


const labels = {
  1: 'Low+',
  2: 'Low',
  3: 'Normal',
  4: 'High',
  5: 'High+',
};


const defaultImg = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const Feature = () => {
  const {id} = useParams();
  const classes = FeatureStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // Local State
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [sent, setSent] = useState(false)
  // Store
  const feature = useSelector((state) => state.features.feature)
  const stars = useSelector((state) => state.priorities.starsFt)
  const isLogged = useSelector((state) => state.auth.logged)
  
  useEffect(() => {
    dispatch(fetchSingleFeature(id))
    dispatch(fetchStarsFt(id))
  }, [])

  return (
    <Card>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={defaultImg}
        title="Feature Image"
        component='img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {feature.title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Requested by: {feature.User && feature.User.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Description: {feature.description}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Current Priority: {priorityAvg(stars)}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Status: {feature.completed ? 'Completed' : 'Pending'} 
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body2" color="textPrimary" component="h2">
       Vote Priority: 
     </Typography>
    <div className={classes.root}> 
     {isLogged.name ? <><Rating
        name="hover-feedback"
        value={value}
        precision={1}
        readOnly={sent}
        onChange={(event, newValue) => {
          event.preventDefault()
          setValue(newValue);
          dispatch(addPriorityFt(feature.id, {stars: newValue})).then(() => setSent(true))
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </>
       :  <Typography variant="body2" color="textPrimary" component="p">
       You must be logged in 
     </Typography>}
    </div>
    <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<HomeOutlinedIcon />}
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </CardActions>
  </Card>
  );
}

export default Feature