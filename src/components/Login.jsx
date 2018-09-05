import React, { Component } from "react";
import "../containers/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <div class="jumbotron" id="Login">
          <form
            class="form-inline my-9 my-lg-7"
            _lpchecked="1"
            onSubmit={this.handleSubmit}
          >
            <h1 class="display-3">Login</h1>
            <input
              class="form-control mr-sm-2"
              type="email"
              id="email"
              placeholder="Email"
            />
            <br />
            <br />
            <input
              class="form-control mr-sm-2"
              type="password"
              id="password"
              placeholder="Password"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
