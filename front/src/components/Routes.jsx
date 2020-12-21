import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { fetchUser } from "../redux/actions/auth";
import { useDispatch } from 'react-redux';

import Main from "./Main";
import Login from './Login';
import Register from './Register';
import ToolForm from './ToolForm';
import Tool from './Tool';
import FeatureForm from './FeatureForm';
import BugForm from './BugForm';
import Feature from './Feature';
import Bug from './Bug';

const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is logged
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <BrowserRouter>
          <>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

              <Route path="/addTool" component={ToolForm} />
              <Route path='/tool/:id' component={Tool} />

              <Route path='/feature/:id' component={Feature} />
              <Route path='/bug/:id' component={Bug}/>

              <Route path='/addFeature/:id' component={FeatureForm} />
              <Route path='/addBug/:id' component={BugForm} />

              <Route exact path="/" component={Main} />

              <Redirect from='/' to='/' />
            </Switch>
          </>
        </BrowserRouter>
    </>
  );
}

export default Routes
