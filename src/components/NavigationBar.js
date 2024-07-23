import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Link to={""} className="navbar-brand">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            width="25"
            height="25"
            alt="brand"
          />
        </Link>
        <Nav className="mr-auto">
          <Link to={"/"} className="nav-link">
             Home
          </Link>
          <Link to={"features"} className="nav-link">
            Features
          </Link>
          <Link to={"clients"} className="nav-link">
            Clients
          </Link>
          <Link to={"support"} className="nav-link">
            Support 
          </Link>
          <Link to={"login"} className="nav-link">
            Login
          </Link>
          <Link to={"signup"} className="nav-link">
            Sign Up
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
