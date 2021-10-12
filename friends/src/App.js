import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import PrivateRoute from './components/PrivateRoute';

function App() {
  let isLoggedIn = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          {
            (isLoggedIn) && <Link to="/friends">Friends List</Link>
          }
        </header>

        <Switch>
          <PrivateRoute path="/friends" component={FriendsList}/>
          <Route path="/friendform" component={FriendForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
