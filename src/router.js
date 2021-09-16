import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register';

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
    </>
  );
};

export default Routes;
