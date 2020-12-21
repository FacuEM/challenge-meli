import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchFeatures } from '../redux/actions/features';
import { fetchBugs } from '../redux/actions/bugs';
import Navbar from './Navbar';
// Material UI
import {Card, CardContent, CardMedia, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// Styles
import {ToolStyles} from '../assets/ToolStyles';
// Icons
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';





const Tool = () => {
  const dispatch=useDispatch();
  const {id} = useParams();
  const classes = ToolStyles();
  const theme = useTheme();
  // Store
  const tool = useSelector(state => state.tools.tool)
  const isLogged = useSelector(state => state.auth.logged)
  const features = useSelector(state => state.features.features)
  const bugs = useSelector(state => state.bugs.bugs)
 
  

  useEffect(() => {
    dispatch(fetchSingleTool(id))
    dispatch(fetchFeatures(id))
    dispatch(fetchBugs(id))
  },[])

 
  return (
    <>
    <Navbar />
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
            <TableCell className={classes.letters} align="left">Detailed Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {features && features.map((f) => (
            <TableRow key={f.id}>
              
              <TableCell align="left">{f.title}</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">{f.description}</TableCell>
              <TableCell align="left"><Link to={`/feature/${f.id}`}> More Details </Link></TableCell>
             
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
            <TableCell className={classes.letters} align="left">Detailed Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bugs && bugs.map((b) => (
            <TableRow key={b.id}>
              
              <TableCell align="left">{b.title}</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">{b.description}</TableCell>
              <TableCell align="left"><Link to={`/bug/${b.id}`}> More Details </Link></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    { isLogged.email && <> <Link to={`/addBug/${id}`} className={classes.linkDeco} >
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<BugReportOutlinedIcon />}
      >
        Add bug
      </Button>
      </Link>
      <Link to={`/addFeature/${id}`} className={classes.linkDeco} >
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddToPhotosOutlinedIcon />}
      >
        Add feature
      </Button>
      </Link></>}
      <Link to='/' className={classes.linkDeco} >
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<HomeOutlinedIcon />}
      >
        Go Back
      </Button>
      </Link>
      </CardContent>
    </div>
  </Card>
 </>

  )
}

export default Tool


