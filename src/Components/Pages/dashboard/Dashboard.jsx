import React, { useState, useEffect } from "react";
// import Nav from "./Nav";
import "./dashboard.css";
import userprofile from "../../../assets/img/userprofile.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo/logo-icon.svg";
import dashboardlogo from "../../../assets/icons/logo/dashboardlogo.svg";
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

  // ===== MODAL FUNCTIONALITY =====
  // getting all modals(total 4)
  // let checkOutModal = document.querySelector(".checkoutModal");
  // let orderModal = document.querySelector(".yourOrder");

  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty(qty + 1);
    if (qty >= 10) {
      setQty(10);
    }
  };
  const decreaseQty = () => {
    setQty(qty - 1);
    if (qty <= 1) {
      setQty(1);
    }
  };

  const addProduct = () => {
    // making productmodal visible
    let productModal = document.querySelector(".productDetailsModal");
    productModal.style.display = "block";

    // removing visibility if productModal overlay is clicked
    productModal.addEventListener("click", (e) => {
      let target = e.target;
      if (
        target.getAttribute("class") === "productDetailsModal" ||
        target.getAttribute("class") === "closeproductDetailsModal"
      ) {
        productModal.style.display = "none";
      }
    });
  };

  const cartModal = () => {
    // set Active nav to cart
    setActiveNav("cart");

    // making cartModal visible
    let cartModal = document.querySelector(".cartModal");
    let navMenu = document.querySelector(".show__nav-menubar");
    let menuBar = document.querySelector(".menu__bar");

    // close show__nav-menubar and menu__bar if cartModal is open
    navMenu.style.display = "none";
    menuBar.style.left = "-100%";

    //open cartModal
    cartModal.style.display = "block";

    // removing visibility if cartModal overlay || closeproductDetailsModal is clicked
    cartModal.addEventListener("click", (e) => {
      let target = e.target;
      if (
        target.getAttribute("class") === "cartModal" ||
        target.getAttribute("class") === "closeproductDetailsModal"
      ) {
        cartModal.style.display = "none";
        // if cart Modal is closed, set active nav back to dashboard
        setActiveNav("home");
      }
    });
  };
  // ===== MODAL FUNCTIONALITY =====

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
                  <Navbuttons icon={profileicon} linkTo={"Your Profile"} />
                </Link>
                <Link
                  to="#"
                  onClick={() => setActiveNav("orders")}
                  className={activeNav === "orders" ? "nav_link-active" : ""}
                >
                  <Navbuttons icon={ordersicon} linkTo={"Orders"} count={"8"} />
                </Link>
                <Link
                  to="#"
                  onClick={cartModal}
                  className={activeNav === "cart" ? "nav_link-active" : ""}
                >
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
              {/* <Nav /> */}
              <nav id="navbar__menu">
                <div className="navbar__nav">
                  <div className="dashbaord__logo-wrapper">
                    <Link to="#">
                      <img src={dashboardlogo} alt="logo" className="logo" />
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
                      className={
                        activeNav === "profile" ? "nav_link-active" : ""
                      }
                    >
                      <Navbuttons icon={profileicon} linkTo={"Your Profile"} />
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveNav("orders")}
                      className={
                        activeNav === "orders" ? "nav_link-active" : ""
                      }
                    >
                      <Navbuttons
                        icon={ordersicon}
                        linkTo={"Orders"}
                        count={"8"}
                      />
                    </Link>
                    <Link
                      to="#"
                      onClick={cartModal}
                      className={activeNav === "cart" ? "nav_link-active" : ""}
                      id="cart"
                    >
                      <Navbuttons
                        icon={carticon}
                        linkTo={"Your Cart"}
                        count={"5"}
                      />
                    </Link>
                  </ul>
                </div>
              </nav>
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
                          {/* <Link to={`desc/${id}`}> */}
                          <h2>{name}</h2>
                          {/* </Link> */}
                          <p>{details}</p>
                        </div>
                        <div className="prod__price">
                          <h3>{price}</h3>
                          <h3 className="addProduct" onClick={addProduct}>
                            {add}
                          </h3>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ========================== MODALS  ========================== */}

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
                <span onClick={decreaseQty}>-</span>
                <h2>{qty}</h2>
                <span onClick={increaseQty}>+</span>
              </div>
              <div className="addToCartBtn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* productdetails modal ends */}

        {/* cart modal */}
        <div className="cartModal">
          <div className="cartModal__content">
            <span className="closeproductDetailsModal">X</span>
            <div className="cart">
              <h2>Your Cart</h2>
              <div className="cartItem__wrapper">
                <table>
                  <thead className="cart__heading-tr">
                    <tr>
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody className="cart__data-tr">
                    <tr>
                      <td>
                        <div className="item__dets-wrapper">
                          <div className="item__dets-Img">
                            <img src={productDetailsImg} alt="" />
                          </div>
                          <div className="item__dets-title">
                            <p className="fw-bold">Stir Fry Pasta</p>
                            <small className="text-danger">Remove</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-bold">3</td>
                      <td className="fw-bold">N 1,000.00</td>
                      <td className="fw-bold">N 3,000.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="item__dets-wrapper">
                          <div className="item__dets-Img">
                            <img src={productDetailsImg} alt="" />
                          </div>
                          <div className="item__dets-title">
                            <p className="fw-bold">Stir Fry Pasta</p>
                            <small className="text-danger">Remove</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-bold">3</td>
                      <td className="fw-bold">N 1,000.00</td>
                      <td className="fw-bold">N 3,000.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="item__dets-wrapper">
                          <div className="item__dets-Img">
                            <img src={productDetailsImg} alt="" />
                          </div>
                          <div className="item__dets-title">
                            <p className="fw-bold">Stir Fry Pasta</p>
                            <small className="text-danger">Remove</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-bold">3</td>
                      <td className="fw-bold">N 1,000.00</td>
                      <td className="fw-bold">N 3,000.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart__item-total">
                  <p>
                    Total: <span>N 30,000.00</span>
                  </p>
                </div>
              </div>
              <div className="cart__checkoutBtn">
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        {/* cart modal Ends */}

        {/* Your Order modal */}
        {/* <div className="yourOrder">
          <div className="yourOrder__content">
            <span className="closeproductDetailsModal">X</span>
            <div className="cart">
              <h2>Your Order</h2>
              <div className="cartItem__wrapper">
                <table>
                  <thead className="cart__heading-tr">
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="cart__data-tr">
                  <tr>
                    <td>
                      <div className="item__dets-wrapper">
                        <div className="item__dets-Img">
                          <img src={productDetailsImg} alt="" />
                        </div>
                        <div className="item__dets-title">
                          <p className="fw-bold">Stir Fry Pasta</p>
                          <small className="text-danger">Remove</small>
                        </div>
                      </div>
                    </td>
                    <td className="fw-bold">3</td>
                    <td className="fw-bold">N 1,000.00</td>
                    <td className="fw-light">Delivered</td>
                    </tr>
                  <tr>
                    <td>
                      <div className="item__dets-wrapper">
                        <div className="item__dets-Img">
                          <img src={productDetailsImg} alt="" />
                        </div>
                        <div className="item__dets-title">
                          <p className="fw-bold">Stir Fry Pasta</p>
                          <small className="text-danger">Remove</small>
                        </div>
                      </div>
                    </td>
                    <td className="fw-bold">3</td>
                    <td className="fw-bold">N 1,000.00</td>
                    <td className="fw-light">Delivered</td>
                    </tr>
                  <tr>
                    <td>
                      <div className="item__dets-wrapper">
                        <div className="item__dets-Img">
                          <img src={productDetailsImg} alt="" />
                        </div>
                        <div className="item__dets-title">
                          <p className="fw-bold">Stir Fry Pasta</p>
                          <small className="text-danger">Remove</small>
                        </div>
                      </div>
                    </td>
                    <td className="fw-bold">3</td>
                    <td className="fw-bold">N 1,000.00</td>
                    <td className="fw-light">Delivered</td>
                    </tr>
                  <tr>
                    <td>
                      <div className="item__dets-wrapper">
                        <div className="item__dets-Img">
                          <img src={productDetailsImg} alt="" />
                        </div>
                        <div className="item__dets-title">
                          <p className="fw-bold">Stir Fry Pasta</p>
                          <small className="text-danger">Remove</small>
                        </div>
                      </div>
                    </td>
                    <td className="fw-bold">3</td>
                    <td className="fw-bold">N 1,000.00</td>
                    <td className="fw-light">Delivered</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        {/* Your Order modal Ends */}

        {/* checkout modal */}
        <div className="checkoutModal">
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
        </div>
        {/* checkout modal Ends */}
      </div>
    </>
  );
};

export default Dashboard;
