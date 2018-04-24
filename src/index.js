import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import LoginPage from "./components/LoginPage";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" component={}/>
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </App>
  </Router>
  , document.getElementById('root'),
);
// registerServiceWorker();
