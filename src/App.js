import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
