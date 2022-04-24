import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="card card-style" style={{ border: "2px solid" }}>
        <img src={this.props.img} className="card-img-top card-top" alt="..." />
        <div className="card-body">
          <Link
            to={`/${this.props.name.toLowerCase()}`}
            className="btn btn-primary"
          >
            {this.props.name}
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
