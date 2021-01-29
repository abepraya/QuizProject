import React, { Component } from "react";
// import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Quiz Apps
            </a>
            <ul className="nav justify-content-end">
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${this.props.linkStatus[0]}`}
                  to="/createquiz"
                >
                  Create Quiz
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${this.props.linkStatus[1]}`}
                  to="/question"
                >
                  Attempt Quiz
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
