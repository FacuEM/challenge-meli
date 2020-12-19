import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {logout} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';
// Material UI
import {AppBar, Button, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  linkDeco : {
    textDecoration: "none"
  }
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const isLogged = useSelector((state) => state.auth.logged);
 
  const handleLogout = () => {
    dispatch(logout())
    history.push('/')
  }


 
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Challenge - FacuEM
          </Typography>
        {isLogged.email ?  <>  <Link to='/addTool' className={classes.linkDeco}> <Button
                color="primary"
                variant="outlined"
                className={classes.link}
               
              >
                Add Tool
              </Button> </Link><Button
                color="secondary"
                variant="outlined"
                className={classes.link}
                onClick={handleLogout}
              >
                Logout
              </Button> </> : <>
          <Link to='/login' className={classes.linkDeco}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                Sign In
              </Button>
              </Link>
         
       
            <Link to='/register' className={classes.linkDeco}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                Sign Up
              </Button>
              </Link></>}
   
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default Navbar