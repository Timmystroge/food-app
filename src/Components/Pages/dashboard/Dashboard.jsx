import React, { useState, useEffect } from "react";
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
import logout from "../../../assets/icons/logout.svg";
import { DashboardMenuToggle } from "../../../assets/script/Main";
import DashboardMenus from "./DashboardMenus";
// import productDetailsImg from "../../../assets/img/specialdish1.svg";

const Dashboard = () => {
  // getting user details from session
  let user = JSON.parse(sessionStorage.getItem("user"));

  // setting active nav
  const [activeNav, setActiveNav] = useState("home");

  let defaultMenu = {
    img: "",
    name: "",
    details: "",
    price: "",
  };

  //cart functionality
  const [click, setClick] = useState(defaultMenu);

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

  // Dashboard user profile
  const profile = () => {
    setActiveNav("profile");
    // let msg = alert("Profile Page Is Yet to Be Completed!");
    let msg = notify(
      "Profile Page Is Yet to Be Completed! Email developer - Timmystroge75@gmail.com",
      "red"
    );
    if (!msg) {
      setActiveNav("home");
    }
  };

  // NOTIFICATION MSG
  let notify = (text, response) => {
    let notificationMsg = document.querySelector(".notificationMsg");
    notificationMsg.style.display = "block";
    notificationMsg.style.borderTop = `5px solid ${response}`;
    notificationMsg.textContent = text;

    // remove notification msg
    setTimeout(() => {
      notificationMsg.style.display = "none";
    }, 5000);
  };

  // ===== MODAL FUNCTIONALITY START =====
  // getting all modals(total 4)

  const addProduct = (card) => {
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

    //getting and displaying the current info that's clicked.
    setClick(card);
  };

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

  // CART ARRAY
  const [cartArray, setCartArray] = React.useState([]);

  //ADD CART
  const addCart = () => {
    const newCart = {
      id: cartArray.length + 1,
      foodimg: click.img,
      foodname: click.name,
      quantity: qty,
      unitprice: click.unitprice,
      subtotal: qty * click.unitprice,
    };
    if (qty !== 0) {
      setCartArray((list) => {
        return [...list, newCart];
      });
      // display notification msg
      notify(
        "Item has been added to cart succesfully. You can keep shopping or proceed to checkout",
        "mediumseagreen"
      );
      // remove addproduct modal when an item has been added to cart
      let productModal = document.querySelector(".productDetailsModal");
      productModal.style.display = "none";
      // set item quantity back to 1
      setQty(1);
    } else {
      // this might not ever need to run, Default quantity is 1
      // display notification msg
      notify("Please specify a quantity", "red");
    }
  };
  localStorage.setItem("food", JSON.stringify(cartArray));

  //SHOW CART ITEMS
  const cartData = JSON.parse(localStorage.getItem("food"));
  //
  const priceArray = cartData.map((item) => item.subtotal);
  //
  let sum = 0;
  for (let num of priceArray) {
    sum = sum + num;
  }

  // REMOVING A FOOD FROM CART
  const removeItemFromCart = (menuItem) => {
    let filteredCartList = cartArray.filter((list) => {
      return list.id !== menuItem.id;
    });
    notify("Item removed!", "red");
    setCartArray(filteredCartList);
  };

  // Checking Out
  const checkout = () => {
    if (cartArray.length === 0) {
      // display notification msg
      notify("You can't check out an Empty Cart! Please ad an Item", "red");
    } else {
      // making cartModal visible //open cartModal
      let cartModal = document.querySelector(".cartModal");
      cartModal.style.display = "none";

      let checkoutModal = document.querySelector(".checkoutModal");
      checkoutModal.style.display = "block";

      // removing visibility if checkoutModal overlay || closeproductDetailsModal is clicked
      checkoutModal.addEventListener("click", (e) => {
        let target = e.target;
        if (
          target.getAttribute("class") === "checkoutModal" ||
          target.getAttribute("class") === "closeproductDetailsModal"
        ) {
          checkoutModal.style.display = "none";
          // set Active nav to cart
          setActiveNav("home");
        }
      });
    }
  };

  // CHECK OUT PAYMENT DETAILS
  const [cardname, setCardname] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardpin, setCardpin] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const payment = {
      cardname: cardname,
      expdate: expdate,
      cvv: cvv,
      cardpin: cardpin,
    };
    console.log(payment);
    // insert to db
    window.localStorage.setItem("orders", JSON.stringify(cartArray));

    // remove checkout modaal
    let checkoutModal = document.querySelector(".checkoutModal");
    checkoutModal.style.display = "none";

    // display notification msg
    notify("Payment Successful! Your Order is on it way : )", "mediuseagreen");
    setTimeout(() => {
      window.location = "/Components/Pages/dashboard/Dashboard";
    }, 1000);
  };

  // ORDERS PLACED DATA FROM BACKEND
  const [allOrders, setAllorders] = React.useState(
    JSON.parse(localStorage.getItem("orders"))
  );

  // remove order
  const removeOrder = (item) => {
    let filteredOrders = allOrders.filter((list) => {
      return list.id !== item.id;
    });
    notify("Order removed!", "red");
    setAllorders(filteredOrders);
  };
  window.localStorage.setItem("orders", JSON.stringify(allOrders));

  //! close show__nav-menubar and menu__bar if cartModal is open
  const closeShowMenuBarOnModalClose = () => {
    document.querySelector(".show__nav-menubar").style.display = "none";
    document.querySelector(".menu__bar").style.left = "-100%";
  };

  const cartModal = () => {
    // set Active nav to cart
    setActiveNav("cart");

    // close show__nav-menubar and menu__bar if cartModal is open
    closeShowMenuBarOnModalClose();

    if (cartArray.length === 0) {
      // display notification msg
      notify("Please add an Item to your Cart!", "red");
      setActiveNav("home");
    } else {
      // making cartModal visible //open cartModal
      let cartModal = document.querySelector(".cartModal");
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
    }
  };

  const yourOrder = () => {
    // set active nav to order
    setActiveNav("orders");

    // close show__nav-menubar and menu__bar if cartModal is open
    closeShowMenuBarOnModalClose();
    if (allOrders.length === 0) {
      // alert("You do not have any order! Plesae place an Order");
      notify("You do not have any order! Please place an Order", "red");
      setActiveNav("home");
    } else {
      // making norder modal visible // open orderModal
      let yourOrderModal = document.querySelector(".yourOrder");
      yourOrderModal.style.display = "block";

      // removing visibility if cartModal overlay || closeproductDetailsModal is clicked
      yourOrderModal.addEventListener("click", (e) => {
        let target = e.target;
        if (
          target.getAttribute("class") === "yourOrder" ||
          target.getAttribute("class") === "closeproductDetailsModal"
        ) {
          // do something
          yourOrderModal.style.display = "none";
          // if cart Modal is closed, set active nav back to dashboard
          setActiveNav("home");
        }
      });
    }
  };
  // ===== MODAL FUNCTIONALITY ENDS =====

  return (
    <>
      <div className="white-bg">
        <div className="show__nav-menubar">
          <span className="menubar__toggle">X</span>
          <div className="menu__bar">
            <div className="menu__bar-profile-wrapper">
              <img src={userprofile} alt="userprofile" onClick={profile} />
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
                  onClick={profile}
                  className={activeNav === "profile" ? "nav_link-active" : ""}
                >
                  <Navbuttons icon={profileicon} linkTo={"Your Profile"} />
                </Link>
                <Link
                  to="#"
                  onClick={yourOrder}
                  className={activeNav === "orders" ? "nav_link-active" : ""}
                >
                  <Navbuttons
                    icon={ordersicon}
                    linkTo={"Orders"}
                    count={allOrders && allOrders.length}
                  />
                </Link>
                <Link
                  to="#"
                  onClick={cartModal}
                  className={activeNav === "cart" ? "nav_link-active" : ""}
                >
                  <Navbuttons
                    icon={carticon}
                    linkTo={"Your Cart"}
                    count={cartArray && cartArray.length}
                  />
                </Link>
                <Link
                  to="/"
                  className={activeNav === "logout" ? "nav_link-active" : ""}
                >
                  <Navbuttons icon={"=>"} linkTo={"LogOut"} count={""} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <main>
          <div className="dashboard__wrapper">
            <div className="dashboard__navbar">
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
                      onClick={profile}
                      className={
                        activeNav === "profile" ? "nav_link-active" : ""
                      }
                    >
                      <Navbuttons icon={profileicon} linkTo={"Your Profile"} />
                    </Link>
                    <Link
                      to="#"
                      onClick={yourOrder}
                      className={
                        activeNav === "orders" ? "nav_link-active" : ""
                      }
                    >
                      <Navbuttons
                        icon={ordersicon}
                        linkTo={"Orders"}
                        count={allOrders && allOrders.length}
                      />
                    </Link>
                    <Link
                      to="#"
                      onClick={cartModal}
                      className={activeNav === "cart" ? "nav_link-active" : ""}
                    >
                      <Navbuttons
                        icon={carticon}
                        linkTo={"Your Cart"}
                        count={cartArray && cartArray.length}
                      />
                    </Link>
                    <Link
                      to="/"
                      className={
                        activeNav === "logout" ? "nav_link-active" : ""
                      }
                    >
                      <Navbuttons icon={logout} linkTo={"LogOut"} count={""} />
                    </Link>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="dashboard">
              <div className="notificationMsg">
                <p></p>
              </div>
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
                  <Link to="#" onClick={profile}>
                    <img src={userprofile} alt="userprofile" />
                  </Link>
                  <div className="navbar__burger">Menu</div>
                </div>
              </div>
              {/* products */}
              <div className="available__products">
                <div className="available__product-wrapper">
                  {DashboardMenus &&
                    DashboardMenus?.map((item, index) => {
                      return (
                        <>
                          <article key={index}>
                            <div className="prod__img-wrapper">
                              <img src={item?.img} alt={item?.name} />
                            </div>
                            <div className="prod__dets">
                              <h2>{item?.name}</h2>
                              <p>{item?.description}</p>
                            </div>
                            <div className="prod__price">
                              <h3>{item?.price}</h3>
                              <h3
                                className="addProduct"
                                onClick={() => addProduct(item)}
                              >
                                {item?.add}
                              </h3>
                            </div>
                          </article>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ========================== MODALS  ========================== */}

        {/* productdetails modal */}
        {
          <div className="productDetailsModal">
            <div className="productDetailsModal__content">
              <span className="closeproductDetailsModal">X</span>
              <div className="productDetailsModal__img">
                <img src={click.img} alt="productDetailsModal__img" />
              </div>
              <div className="productDetailsModal__description">
                <h2>{click.name}</h2>
                <p>{click.details}</p>
                <div className="productDetailsModal__breakdown">
                  <h2>{click.price}</h2>
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
                  <button onClick={addCart}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        }
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
                    {cartArray &&
                      cartArray.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td>
                                <div className="item__dets-wrapper">
                                  <div className="item__dets-Img">
                                    <img src={item.foodimg} alt="" />
                                  </div>
                                  <div className="item__dets-title">
                                    <p className="fw-bold">{item.foodname}</p>
                                    <small
                                      className="text-danger"
                                      onClick={() => removeItemFromCart(item)}
                                    >
                                      Remove
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td className="fw-bold">{item.quantity}</td>
                              <td className="fw-bold">
                                N
                                {item.unitprice.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                              <td className="fw-bold">
                                N
                                {(
                                  item.quantity * item.unitprice
                                ).toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
                <div className="cart__item-total">
                  <p>
                    Total:{" "}
                    <span>
                      N
                      {sum.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                      .00
                    </span>
                  </p>
                </div>
              </div>
              <div className="cart__checkoutBtn">
                <button onClick={checkout}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        {/* cart modal Ends */}

        {/* Your Order modal */}
        <div className="yourOrder">
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
                    {allOrders &&
                      allOrders.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td>
                                <div className="item__dets-wrapper">
                                  <div className="item__dets-Img">
                                    <img src={item.foodimg} alt="" />
                                  </div>
                                  <div className="item__dets-title">
                                    <p className="fw-bold">{item.foodname}</p>
                                    <small
                                      className="text-danger"
                                      onClick={() => removeOrder(item)}
                                    >
                                      Remove
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td className="fw-bold">{item.quantity}</td>
                              <td className="fw-bold">
                                N
                                {item.unitprice.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                              <td
                                className="fw-light"
                                style={{ color: "mediumseagreen" }}
                              >
                                Delivered
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Your Order modal Ends */}

        {/* checkout modal */}
        <div className="checkoutModal">
          <div className="checkoutModal__content">
            <span className="closeproductDetailsModal">X</span>
            <div className="checkout">
              <h2>Checkout</h2>
              <form onSubmit={handlePaymentSubmit}>
                <input
                  type="tel"
                  className="checkout-control"
                  name="cardname"
                  id="cardname"
                  placeholder="Card Number"
                  required
                  value={cardname}
                  onChange={(e) => setCardname(e.target.value)}
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="expdate"
                  id="expdate"
                  placeholder="02/20"
                  required
                  value={expdate}
                  onChange={(e) => setExpdate(e.target.value)}
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="cvv"
                  id="cvv"
                  placeholder="CVV/CVV2"
                  required
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                <input
                  type="tel"
                  className="checkout-control"
                  name="cardpin"
                  id="cardpin"
                  placeholder="Card Pin"
                  required
                  value={cardpin}
                  onChange={(e) => setCardpin(e.target.value)}
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
