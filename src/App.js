import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Signup} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
