import React from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import fakeAuth from "../../utils/fakeAuth";

class Register extends React.Component {
  state = {
    redirectToReferrer: false
  };

  register = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must sign up to enter the page at {from.pathname}</p>
        <button onClick={this.register}>Sign up</button>
      </div>
    );
  }
}

export default Register;
