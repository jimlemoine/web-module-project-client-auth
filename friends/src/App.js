import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </header>

        <Switch>
          <Route path="/friends" />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
