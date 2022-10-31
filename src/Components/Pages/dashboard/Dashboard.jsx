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
// eslint-disable-next-line
import productDetailsImg from "../../../assets/img/specialdish1.svg";

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
  // getting user details from session
  let user = JSON.parse(sessionStorage.getItem("user"));
  // setting active nav
  const [activeNav, setActiveNav] = useState("home");
  // menu toggle
  useEffect(() => {
    DashboardMenuToggle();
  }, []);

  // getting time of the day dynamically
  const now = new Date();
  let hour = now.getHours();
  let updatedTime = "";
  if (hour >= 0 && hour <= 12) {
    updatedTime = "Good Morning";
  } else if (hour >= 12 && hour <= 17) {
    updatedTime = "Good Afternoon";
  } else {
    updatedTime = "Good Evening";
  }

  // ProductsDetails modal popup
  // const productDetailsModal = document.querySelector(".productDetailsModal");
  // console.log(productDetailsModal);

  return (
    <>
      <div className="white-bg">
        <div className="show__nav-menubar">
          <span className="menubar__toggle">X</span>
          <div className="menu__bar">
            <div className="menu__bar-profile-wrapper">
              <img src={userprofile} alt="userprofile" />
            </div>
            <h4>{user.name}</h4>
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
                  <Navbuttons
                    icon={carticon}
                    linkTo={"Your Cart"}
                    count={"5"}
                  />
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
                  <h3>
                    {updatedTime}, {user?.name}
                  </h3>
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
                          <Link to={`desc/${id}`}>
                            <h2>{name}</h2>
                          </Link>
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

        {/* productdetails modal */}
        <div className="productDetailsModal">
          <div className="productDetailsModal__content">
            <span className="closeproductDetailsModal">X</span>
            <div className="productDetailsModal__img">
              <img src={productDetailsImg} alt="productDetailsModal__img" />
            </div>
            <div className="productDetailsModal__description">
              <h2>Blueberry Toasts and smoothie</h2>
              <p>
                Just have a single bite of this Black Forest pastry and it will
                all make a proper sense to you. The kick of cherry and rich
                chocolate of this super light, airy pastry will definitely make
                you feel "wow". The perfect combination of cherry cream and rich
                chocolate can provide the ultimate fulfillment to your dessert
                craving.
              </p>
              <div className="productDetailsModal__breakdown">
                <h2>NGN 2000.00</h2>
                <h2>10-20 Mins</h2>
                <h2>10 Pcs Avail</h2>
              </div>
            </div>
            <div className="addItemToCart">
              <div className="counter">
                <span>-</span>
                <h2>3</h2>
                <span>+</span>
              </div>
              <div className="addToCartBtn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* cart modal */}
        {/* <div className="cartModal">
          <div className="cartModal__content">
            <div className="cart">
              <h2>Your Cart</h2>
              <div className="cartItem__wrapper">
                <div className="item">
                  <h5>Item</h5>
                  <div className="cartproduct___item-wrapper">
                    <div className="cartproduct___item-img">
                      <img src={dish1} alt="" />
                    </div>
                    <div className="cartproduct__name">
                      <h3>Stir Fry Pasta</h3>
                      <p>Remove</p>
                    </div>
                  </div>
                </div>
                <div className="item_dets">
                  <div className="item_dets-desc">
                    <h5>Qty</h5>
                    <h5>Unit Price</h5>
                    <h5>Sub-total</h5>
                  </div>
                  <div className="item_dets-product-dets">
                    <h3>3</h3>
                    <h3>N 1,000.00</h3>
                    <h3>N 3,000.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* checkout modal */}
        {/* <div className="checkoutModal">
          <div className="checkoutModal__content">
          <span className="closeproductDetailsModal">X</span>
            <div className="checkout">
              <h2>Checkout</h2>
              <form action="">
                <input
                  type="tel"
                  className="checkout-control"
                  name="cardname"
                  id="cardname"
                  placeholder="Card Number" 
                  required
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="expdate"
                  id="expdate"
                  placeholder="Exp Date" 
                  required
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="cvv"
                  id="cvv"
                  placeholder="CVV/CVV2" 
                  required
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="cardpin"
                  id="cardpin"
                  placeholder="Card Pin" 
                  required
                />
                <div className="checkoutModal__button">
                  <button type="submit">Make Payment</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
