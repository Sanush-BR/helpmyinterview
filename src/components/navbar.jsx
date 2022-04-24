import React, { Component } from "react";
import { FaThList } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <h5 className="navbar-brand">
              <i>
                <b className="nav-font">helpMyInterviews</b>
              </i>
            </h5>
            <ul>
              <li
                className="nav-item  dropdown nav-dropdown"
                style={{ marginRight: "100px" }}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <span className="badge bg-light sm">GO</span> */}
                  <FaThList style={{ color: "white", margin: "auto" }} />
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Home
                    </Link>
                  </li>
                  {!this.props.user && (
                    <React.Fragment>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                  {this.props.user && (
                    <React.Fragment>
                      <li>
                        <a className="dropdown-item">
                          <span className="mr-1">Hi</span>
                          {this.props.user.name}
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/logout">
                          Logout
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
