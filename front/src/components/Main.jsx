import React, {useEffect} from 'react';
import {fetchTools} from '../redux/actions/tools';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto 10px auto 10px'
  },
  linkDeco : {
    textDecoration: "none"
  }
});


const Main = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tools =  useSelector(state => state.tools.tools)

  useEffect(() =>{ dispatch(fetchTools())}, [])
  return (
    <div>
      <Navbar/>
      <br/>
      <Grid container spacing={2}>
        
      {tools && 
      tools.map((t) => <Grid item xs={12} sm={6} md={4} lg={2}>  <Card className={classes.root} key={t.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tool image"
          height="140"
          image={t.image}
          title={t.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {t.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/tool/${t.id}`} className={classes.linkDeco}>
        <Button size="small" color="primary">
          More Details
        </Button>
        </Link>
      </CardActions>
    </Card> </Grid>)}
   
    </Grid>
    </div>
  )
}

export default Main