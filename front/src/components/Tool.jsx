import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSingleTool} from '../redux/actions/tools';
import {Link, useParams} from 'react-router-dom'
import { fetchFeatures } from '../redux/actions/features';
import { fetchBugs } from '../redux/actions/bugs';
import Navbar from './Navbar';
import FeatureCell from './FeatureCell';
import BugCell from './BugCell';
// Material UI
import {Card, CardContent, CardMedia, Typography, Table,  TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
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
      title="Tool image"
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
            <TableCell className={classes.letters} align="left">Priority</TableCell>
            <TableCell className={classes.letters} align="left">Requested by</TableCell>
            <TableCell className={classes.letters} align="left">Status</TableCell>
            <TableCell className={classes.letters} align="left">Detailed Information</TableCell>
            {tool.UserId === isLogged.id && <TableCell className={classes.letters} align="left">Activate</TableCell>}
          </TableRow>
        </TableHead>

       <FeatureCell  />

      </Table>
    </TableContainer>
    <br/>
    <h3>Bugs</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.thead}>
          <TableRow>

            <TableCell className={classes.letters} align="left">Title</TableCell>
            <TableCell className={classes.letters} align="left">Priority</TableCell>
            <TableCell className={classes.letters} align="left">Requested by</TableCell>
            <TableCell className={classes.letters} align="left">Status</TableCell>
            <TableCell className={classes.letters} align="left">Detailed Information</TableCell>
            {tool.UserId === isLogged.id && <TableCell className={classes.letters} align="left">Activate</TableCell>}
          </TableRow>
        </TableHead>
        <BugCell />
      
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


