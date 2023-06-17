import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container px-lg-5">
    <a className="navbar-brand" href="#!">Start Bootstrap</a>
    <button className="navbar-toggler collapsed" ><span className="navbar-toggler-icon" /></button>
    <div className="navbar-collapse collapse" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">About</a>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Contact</a>
          </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    );
  }
}
