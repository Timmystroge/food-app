import React, { useEffect } from "react";
import Nav from "./Nav";
import "./dashboard.css";
import userprofile from "../../../assets/img/userprofile.svg";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo/logo-icon.svg";

const Dashboard = () => {
  useEffect(() => {
    const menu = document.querySelector(".navbar__burger");
    let navMenu = document.querySelector(".show__nav-menubar");
    menu.addEventListener("click", () => {
      // alert('clicked');
      navMenu.style.display = "block";
      console.log(navMenu);
    });
  }, []);

  return (
    <div className="white-bg">
      <div className="show__nav-menubar">
        lmao ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        reprehenderit!
      </div>
      <main>
        <div className="dashboard__wrapper">
          <div className="dashboard__navbar">
            <Nav />
          </div>
          <div className="dashboard">
            <div className="dashbaord__header">
              <div className="mobilelogo">
                <Link to="/">
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
