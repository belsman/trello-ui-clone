import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./features/user/Login";
import Register from './features/user/Register';
import Home from "./Home";
import BoardDetail from './features/boards/BoardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/user/userSlice';

function Routes() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route
          exact
          path="/boards/:boardId"
          render={({ match }) => (user?.id ? <BoardDetail match={match} /> : <Register />)}
        />
        <Route
          exact
          path="/"
          render={() => (user?.id ? <Home /> : <Register />)}
        />
        <Route
          exact
          path="/boards"
          render={() => (user?.id ? <Home /> : <Register />)}
        />
      </Switch>
    </>
  );
};

export default Routes;
