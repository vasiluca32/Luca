import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./Login.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
  }

  componentDidMount() {
    console.log("login-form-mounteed");
  }
  LoginUser() {
    let url = `https://movies-app-siit.herokuapp.com/auth/login`;
    let username = this.usernameField.current.value;
    let password = this.passwordField.current.value;
    console.log(username);
    console.log(password);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ username: username, password: password });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then(function (result) {
        console.log(result);
        let obj = JSON.parse(result);
        console.log(obj.authenticated, obj.accessToken);
        window.localStorage.setItem("access_token", obj.accessToken);
        window.localStorage.setItem("username", username);
      })
      .catch((error) => console.log("error", error));
    // window.location.reload();
  }

  render() {
    return (
      <div className=" loginform row mx-auto">
        <div className="container col">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={this.usernameField}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={this.passwordField}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>
          <Link className="register" to="/Home">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.LoginUser()}
            >
              Login
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    );
  }
}
export default LoginForm;
