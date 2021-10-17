import './App.css';
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
