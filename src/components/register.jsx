import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "./services/userService";
import auth from "./services/authService";
import { toast } from "react-toastify";

class Register extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      const { headers } = await register(data);
      auth.loginWithJwt(headers["x-auth-token"]);
      localStorage.setItem("signup", true);
      window.location = "/";
      toast.success("Successfully Registered");
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
        <h3 className="mb-5">Register</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
