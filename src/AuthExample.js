import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRouter";
import Public from "./views/Public/Public";
import Protected from "./views/Protected/Protected";
import Login from "./views/Public/Login";
import Register from "./views/Public/Register";
import fakeAuth from "./utils/fakeAuth";

import AuthButton from "./components/AuthButton/AuthButton";
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

export default AuthExample;
