import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {logout} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';
// Material UI
import {AppBar, Button, CssBaseline, Toolbar, Typography} from "@material-ui/core";
// Styles
import {NavbarStyles} from '../assets/NavbarStyles'

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = NavbarStyles();
  // Store
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