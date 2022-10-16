import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbuttons from "./Navbuttons";
import logo from "../../../assets/icons/logo/dashboardlogo.svg";
import homeicon from "../../../assets/icons/homeicon.svg";
import profileicon from "../../../assets/icons/profileicon.svg";
import ordersicon from "../../../assets/icons/ordersicon.svg";
import carticon from "../../../assets/icons/carticon.svg";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <div>
      <nav id="navbar__menu">
        <div className="navbar__nav">
          <div className="dashbaord__logo-wrapper">
            <Link to="#">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar__nav-links">
          <ul>
            <Link
              to="#"
              onClick={() => setActiveNav("home")}
              className={activeNav === "home" ? "nav_link-active" : ""}
            >
              <Navbuttons icon={homeicon} linkTo={"Dashboard"} />
            </Link>
            <Link
              to="#"
              onClick={() => setActiveNav("profile")}
              className={activeNav === "profile" ? "nav_link-active" : ""}
            >
              {" "}
              <Navbuttons icon={profileicon} linkTo={"Your Profile"} />
            </Link>
            <Link
              to="#"
              onClick={() => setActiveNav("orders")}
              className={activeNav === "orders" ? "nav_link-active" : ""}
            >
              {" "}
              <Navbuttons icon={ordersicon} linkTo={"Orders"} count={"8"} />
            </Link>
            <Link
              to="#"
              onClick={() => setActiveNav("cart")}
              className={activeNav === "cart" ? "nav_link-active" : ""}
            >
              {" "}
              <Navbuttons icon={carticon} linkTo={"Your Cart"} count={"5"} />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
