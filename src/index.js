import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage/LoginPage';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route component={App} />
    </Switch>
  </Router>
  , document.getElementById('root'),
);
// registerServiceWorker();
