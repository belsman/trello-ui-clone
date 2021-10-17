import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./features/user/Login";
import Register from './features/user/Register';
import Home from "./Home";
import BoardDetail from './features/boards/BoardDetail';
import { useSelector } from 'react-redux';

function Routes() {
  const user = useSelector(state => state.user);

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route
          exact
          path="/boards/:boardId"
          render={() => (user?.id ? <BoardDetail /> : <Register />)}
        />
        <Route
          exact
          path="/"
          render={() => (user?.id ? <Home /> : <Register />)}
        />
      </Switch>
    </>
  );
};

export default Routes;
