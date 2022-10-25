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
import dish1 from "../../../assets/img/dish1.svg";
import dish2 from "../../../assets/img/dish2.svg";
import dish3 from "../../../assets/img/dish3.svg";
import dish4 from "../../../assets/img/dish4.svg";
import dish5 from "../../../assets/img/dish5.svg";
import dish6 from "../../../assets/img/dish6.svg";

const data = [
  {
    id: 1,
    img: dish1,
    name: "Stir Fry Pasta",
    details: "The in-house pasta and chicken by chef Mario",
    price: "N1,000.00",
    add: "Add to Cart",
  },
  {
    id: 2,
    img: dish2,
    name: "Tasty Indomie",
    details: "The in-house pasta and chicken by chef Luigi",
    price: "N1,000.00",
    add: "Add to Cart",
  },
  {
    id: 3,
    img: dish3,
    name: "Veggie Meat",
    details: "The in-house pasta and chicken by chef Yoshi",
    price: "N1,000.00",
    add: "Add to Cart",
  },
  {
    id: 4,
    img: dish4,
    name: "Snail Soup",
    details: "The in-house pasta and chicken by chef Ryu",
    price: "N1,000.00",
    add: "Add to Cart",
  },
  {
    id: 5,
    img: dish5,
    name: "Rice Soup",
    details: "The in-house pasta and chicken by chef Taj",
    price: "N1,000.00",
    add: "Add to Cart",
  },
  {
    id: 6,
    img: dish6,
    name: "Stir Fry Pasta",
    details: "The in-house pasta and chicken by chef Kin",
    price: "N1,000.00",
    add: "Add to Cart",
  },
];

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
              <div className="available__product-wrapper">
                {data.map(({ id, img, name, details, price, add }) => {
                  return (
                    <article key={id}>
                      <div className="prod__img-wrapper">
                        <img src={img} alt={name} />
                      </div>
                      <div className="prod__dets">
                        <h2>{name}</h2>
                        <p>{details}</p>
                      </div>
                      <div className="prod__price">
                        <h3>{price}</h3>
                        <h3>{add}</h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
