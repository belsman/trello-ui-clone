import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Login from './features/user/Login';
import Register from './features/user/Register';
import Home from "./Home";
import BoardDetail from './BoardDetail';
import CardDetail from './CardDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/boards/:boardId" exact component={BoardDetail} />
        <Route path="/card-detail" component={CardDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
