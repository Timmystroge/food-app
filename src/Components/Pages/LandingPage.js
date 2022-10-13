import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import productImg from "../../assets/img/productImg.svg";
import googleplay from "../../assets/icons/googleplay.svg";
import appstore from "../../assets/icons/appstore.svg";
import Dishes from "../reuseable/Dishes";
import specialdish1 from "../../assets/img/specialdish1.svg";
import specialdish2 from "../../assets/img/specialdish2.svg";
import specialdish3 from "../../assets/img/specialdish3.svg";
import Footer from "../reuseable/Footer";
import Main from "../../assets/script/Main";

const LandingPage = () => {
  const [message] = useState("This Page is not available yet!");
  const warning = () => {
    alert(message);
  };
  useEffect(() => {
    // getting emails from notify-form
    Main();

  }, []);

  return (
    <div>
      <div className="mt-20">
        {/* navbar */}
        <Navbar />
        <div className="container">
          <div className="product-page">
            <div className="product-desc">
              <h2>
                Order <span>food</span> anytime, anywhere
              </h2>
              <p>
                Browse from our list of specials to place your order and have
                food delivered to you in no time. Affordable, tasty and fast!
              </p>
              <div className="getapp">
                <Link to="#" onClick={warning}>
                  <img src={googleplay} alt="getappp" className="googleplay" />
                </Link>
                <Link to="#" onClick={warning}>
                  <img src={appstore} alt="getappp" className="appstore" />
                </Link>
              </div>
            </div>
            <div className="product-img">
              <img src={productImg} alt="productimg" className="productImg" />
            </div>
          </div>
          {/* special meal of the day */}
          <section>
            <div className="specialmeal">
              <div className="headline">
                <h2>Special Meals of the day!</h2>
                <p>
                  Check our sepecials of the day and get discounts on all our
                  meals and swift delivery to what ever location within Ilorin.
                </p>
              </div>
              <div className="dishes">
                <div className="dishes-wrapper">
                  <Dishes
                    img={specialdish1}
                    dishname={"Stir fry Pasta"}
                    dishdeatils={
                      "Stir fry pasta yada yada yada because of Sesan"
                    }
                  />
                  <Dishes
                    img={specialdish2}
                    dishname={"Meat Balls"}
                    dishdeatils={
                      "Stir fry pasta yada yada yada because of Sesan"
                    }
                  />
                  <Dishes
                    img={specialdish3}
                    dishname={"Burger Meal"}
                    dishdeatils={
                      "Stir fry pasta yada yada yada because of Sesan"
                    }
                  />
                </div>
              </div>
            </div>
          </section>
          {/* get notified */}
          <section>
            <div className="get-notified">
              <div className="notify-detail">
                <h3>Get notified when we update!</h3>
                <p>
                  Get notified when we add new items to our specials menu,
                  update our price list of have promos!
                </p>
              </div>
              <div className="notify-cta">
                <form className="notify-form" method="post">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="Mario@gmail.com"
                    required
                  />
                  <button type="submit" className="notify-btn">
                    Get notified
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
