import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { fetchUser } from "../redux/actions/auth";
import { useDispatch } from 'react-redux';


import Main from "./Main";
import Register from '../components/Register';
import Login from '../components/Login';



const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is logged
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
          <div>
            <Switch>
       
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

              <Route exact path="/" component={Main} />

              <Redirect from='/' to='/' />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default Routes
