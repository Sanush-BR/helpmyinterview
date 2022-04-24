import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "./services/authService";
import { toast } from "react-toastify";
// import jwtDecode from "jwt-decode";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      localStorage.setItem("loggedIn", true);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h3 className="mb-5">Login</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
