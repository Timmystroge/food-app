import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo/logo.svg";

const Navbar = () => {
  const [hamburger, close] = useState(true);
  const toggle = () => {
    if (hamburger) {
      let menu = document.querySelector(".dropdown-content");
      menu.classList.add("active");
      menu.style.display = "block";
    }
  };
  // close menu
  const toggleClose = () => {
    if (close) {
      let menu = document.querySelector(".dropdown-content");
      menu.classList.remove("active");
      menu.style.display = "none";
    }
  };

  return (
    <div className="nav-bar">
      <div className="container nav">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="sign-up">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* ? mobile menu */}

      <div className="dropdown-content">
        <span className="close" onClick={toggleClose}>
          x
        </span>
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="sign-up">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
