import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register';
import Home from "./Home";
import BoardDetail from './BoardDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/boards/:id" exact component={BoardDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
