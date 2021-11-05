import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from "./features/auth/Login";
import Home from "./Home";
import BoardDetail from './features/boards/BoardDetail';
import { fetchUser } from './features/auth/authSlice';

function Routes() {
  const user = useSelector(state => state.auth.user);
  const status = useSelector(state => state.auth.status);
  const error = useSelector(state => state.auth.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  if (status === 'loading') {
    return <h3>.....Loading!</h3>
  }

  if (error) {
    return <h1>An error occured</h1>
  } else {
    if (!user.id) {
      return <Login />
    }
  }
 
  return (
    <>
      <Switch>
        <Route exact path="/boards/:boardId" component={BoardDetail} />
        <Route exact path="/" component={Home} />
        <Route exact path="/boards" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
