import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveRecord } from "./services/recordService";
import { toast } from "react-toastify";
import http from "./services/httpServices";
// import { apiUrl } from "../config.json";

class UpdateForm extends Form {
  state = {
    data: {
      name: "",
      year: "",
      role: "",
      resources: "",
      github_Profile: "",
      linkedIn_Profile: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().min(4).required().label("Name"),
    year: Joi.date().required().label("Date"),
    role: Joi.string().required().label("Role"),
    resources: Joi.string().required().label("Resources"),
    github_Profile: Joi.string().required().label("Github_Profile"),
    linkedIn_Profile: Joi.string().required().label("LinkedIn_Profile"),
  };

  async componentDidMount() {
    if (!window.location.pathname.includes("update"))
      await this.populateRecord();
  }

  async populateRecord() {
    //http://localhost:8000/api${window.location.pathname}
    try {
      const { data: record } = await http.get(
        `${process.env.url}/api${window.location.pathname}${window.location.pathname}`
      );
      this.setState({ data: this.mapToViewModel(record) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/notfound");
    }
  }

  mapToViewModel(record) {
    return {
      _id: record._id,
      name: record.name,
      year: record.year,
      role: record.role,
      resources: record.resources,
      github_Profile: record.github_Profile,
      linkedIn_Profile: record.linkedIn_Profile,
    };
  }

  doSubmit = async () => {
    try {
      await saveRecord(this.state.data);
      this.props.history.replace("/");
    } catch (ex) {
      if (
        ex.response.status &&
        (ex.response.status === 400 || ex.response.status === 403)
      ) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    return (
      <div className="container mb-5">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("year", "Year")}
          {this.renderInput("role", "Role")}
          {this.renderInput("resources", "Resources")}
          {this.renderInput("github_Profile", "Github_Profile")}
          {this.renderInput("linkedIn_Profile", "LinkedIn_Profile")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default UpdateForm;
