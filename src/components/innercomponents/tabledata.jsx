import React, { Component } from "react";
import http from "../services/httpServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
// import { apiUrl } from "../../config.json";

class Carddata extends Component {
  state = {
    records: [],
    user: {},
  };

  async componentDidMount() {
    try {
      const { data: records } = await http.get(
        `http://localhost:8000/api${window.location.pathname}`
      );
      this.setState({ records });
      const user = jwtDecode(localStorage.getItem("token"));
      this.setState({ user });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Please Login to view records");
      }
    }
  }

  handleAdd = async () => {
    this.props.history.push(`${window.location.pathname}/update`);
  };

  handleUpdate = async (record) => {
    // http://localhost:8000/api${window.location.pathname}/${record._id}
    const { data: result } = await http.get(
      `http://localhost:8000/api${window.location.pathname}/${record._id}`
    );
    this.props.history.push(`${window.location.pathname}/${result._id}`);
  };

  handleDelete = async (record) => {
    //  `http://localhost:8000/api${window.location.pathname}/${record._id}`
    const original = this.state.records;
    const records = original.filter((r) => r._id !== record._id);
    this.setState({ records });
    try {
      await http.delete(
        `http://localhost:8000/api${window.location.pathname}/${record._id}`
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Already deleted!");
      }
      this.setState({ records: original });
    }
  };

  render() {
    return (
      <div>
        {this.state.user.isAdmin && (
          <button className="btn btn-primary sm m-2" onClick={this.handleAdd}>
            Insert
          </button>
        )}

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Role</th>
              <th>Resources</th>
              <th>Github_Profile</th>
              <th>LinkedIn_Profile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((m) => (
              <tr key={m.id}>
                <td scope="col">{m.name}</td>
                <td scope="col">{m.year.split("T")[0]}</td>
                <td scope="col">{m.role}</td>
                <td scope="col">{m.resources}</td>
                <td scope="col">{m.github_Profile}</td>
                <td scope="col">{m.linkedIn_Profile}</td>

                <td>
                  {this.state.user.isAdmin && (
                    <React.Fragment>
                      <button
                        className="btn btn-success sm m-2"
                        onClick={() => {
                          this.handleUpdate(m);
                        }}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger sm m-2"
                        onClick={() => this.handleDelete(m)}
                      >
                        Delete
                      </button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Carddata;
