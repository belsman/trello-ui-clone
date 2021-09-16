import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register';
import BoardList from "./BoardList";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/" component={BoardList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
