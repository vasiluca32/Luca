import React, { Component } from "react";
import { Link } from "react-router-dom";

import LoginForm from "../components/login/Login-form";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <LoginForm history={this.props.history} />
          <Link className="switch" to="/Register">
            <h5> If you do not have an account, please register first!</h5>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
