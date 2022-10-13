import React, {  } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo/logo.svg";

const Navbar = () => {
 
  return (
    <div className="nav-bar">
      <div className="container nav">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div>
          <ul class="nav-links">
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
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* ? mobile menu */}

      <div className="drop-down">
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
