import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchFeatures } from '../redux/actions/features';
import { fetchBugs } from '../redux/actions/bugs';
// Material UI
import {Card, CardContent, CardMedia, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  table: {
    minWidth: 650,
  },
  thead: {
    backgroundColor: 'rgb(32,35,42)',
  },
  letters: {
    color: 'white'
  }
}));

const Tool = () => {
  const dispatch=useDispatch();
  const {id} = useParams();
  const tool = useSelector(state => state.tools.tool)
  const isLogged = useSelector(state => state.auth.logged)
  const features = useSelector(state => state.features.features)
  const bugs = useSelector(state => state.bugs.bugs)

  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchSingleTool(id))
    dispatch(fetchFeatures(id))
    dispatch(fetchBugs(id))
  },[])

  return (
 
    <Card className={classes.root}>
       <CardMedia
      className={classes.cover}
      image={tool.image}
      title="Feature image"
      component='img'
    />
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5" key={tool.id}>
        {tool.title}
        </Typography>
       <h3>Features</h3>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.thead}>
          <TableRow>

            <TableCell className={classes.letters} align="left">Title</TableCell>
            <TableCell className={classes.letters} align="left">Image</TableCell>
            <TableCell className={classes.letters} align="left">Description</TableCell>
            <TableCell className={classes.letters} align="left">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {features && features.map((f) => (
            <TableRow key={f.id}>
              
              <TableCell align="left">{f.title}</TableCell>
              <TableCell align="left">{f.image}</TableCell>
              <TableCell align="left">{f.description}</TableCell>
              <TableCell align="left">estrellitas</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <h3>Bugs</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.thead}>
          <TableRow>

            <TableCell className={classes.letters} align="left">Title</TableCell>
            <TableCell className={classes.letters} align="left">Image</TableCell>
            <TableCell className={classes.letters} align="left">Description</TableCell>
            <TableCell className={classes.letters} align="left">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bugs && bugs.map((b) => (
            <TableRow key={b.id}>
              
              <TableCell align="left">{b.title}</TableCell>
              <TableCell align="left">{b.image}</TableCell>
              <TableCell align="left">{b.description}</TableCell>
              <TableCell align="left">estrellitas</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      </CardContent>
      
      
    </div>
  
  </Card>
 

  )
}

export default Tool


/*
<div>
      {tool.title && <h1>{tool.title}</h1>}
      <h1>Features:</h1>
      {features && features.map((f) => <li>{f.title}</li>) }
      <Link to={`/addFeature/${id}`} ><button>Add new feature</button></Link>
      <h1>Bugs:</h1>
      {bugs && bugs.map((b) => <li>{b.title}</li>) }
      <Link to={`/addBug/${id}`} ><button>Add new bug</button></Link>
    </div>
    */