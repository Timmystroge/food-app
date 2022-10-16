import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./dashboard.css";
import userprofile from "../../../assets/img/userprofile.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo/logo-icon.svg";
import Navbuttons from "./Navbuttons";
import homeicon from "../../../assets/icons/homeicon.svg";
import profileicon from "../../../assets/icons/profileicon.svg";
import ordersicon from "../../../assets/icons/ordersicon.svg";
import carticon from "../../../assets/icons/carticon.svg";
import { DashboardMenuToggle } from "../../../assets/script/Main";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    DashboardMenuToggle();
  }, []);

  return (
    <div className="white-bg">
      <div className="show__nav-menubar">
        <span className="menubar__toggle">X</span>
        <div className="menu__bar">
          <div className="menu__bar-profile-wrapper">
            <img src={userprofile} alt="userprofile" />
          </div>
          <h4>Timmystroge Stroge</h4>
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
        </div>
      </div>
      <main>
        <div className="dashboard__wrapper">
          <div className="dashboard__navbar">
            <Nav />
          </div>
          <div className="dashboard">
            <div className="dashbaord__header">
              <div className="mobilelogo">
                <Link to="#">
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </div>
              <div className="profile">
                <h3>Good morning, TimmyStroge!</h3>
                <p>What delicious meal are you craving today.?</p>
              </div>
              <div className="userprofile">
                <Link to="#">
                  <img src={userprofile} alt="userprofile" />
                </Link>
                <div className="navbar__burger">Menu</div>
              </div>
            </div>
            {/* products */}
            <div className="available__products">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                rerum iusto eaque quaerat expedita sint alias aut quos non
                inventore! Minima provident ipsam consequatur totam veritatis
                rerum fugit dolore suscipit libero voluptate repellat doloribus
                officia voluptatum fugiat recusandae, cumque eaque quam dolores
                ad dolor? Laboriosam vitae aperiam dolor a veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                rerum iusto eaque quaerat expedita sint alias aut quos non
                inventore! Minima provident ipsam consequatur totam veritatis
                rerum fugit dolore suscipit libero voluptate repellat doloribus
                officia voluptatum fugiat recusandae, cumque eaque quam dolores
                ad dolor? Laboriosam vitae aperiam dolor a veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                rerum iusto eaque quaerat expedita sint alias aut quos non
                inventore! Minima provident ipsam consequatur totam veritatis
                rerum fugit dolore suscipit libero voluptate repellat doloribus
                officia voluptatum fugiat recusandae, cumque eaque quam dolores
                ad dolor? Laboriosam vitae aperiam dolor a veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                rerum iusto eaque quaerat expedita sint alias aut quos non
                inventore! Minima provident ipsam consequatur totam veritatis
                rerum fugit dolore suscipit libero voluptate repellat doloribus
                officia voluptatum fugiat recusandae, cumque eaque quam dolores
                ad dolor? Laboriosam vitae aperiam dolor a veniam.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
