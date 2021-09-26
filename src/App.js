import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Register from './containers/Register';
import Login from './containers/Login';
import Measurements from './containers/Measurements';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Measurements} />
      </Switch>
    </Router>
  );
}

export default App;
