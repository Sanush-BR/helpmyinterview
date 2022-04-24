import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="container">
          <div
            className="jumbotron jumbotron-fluid"
            style={{ border: "2px solid" }}
          >
            <h3 className="display">helpMyInterviews</h3>
            <p className="lead">
              <b>
                <i>
                  The Main aim of this website is to help prefinal year or any
                  graduate seeking for job in techgiants.basically this contains
                  the records of students who already working at these
                  companies.records includes details of student such as
                  name,year of placed and role.Also contains there
                  github,linkedIn profile helps to connect and also to know
                  about there projects.
                </i>
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
