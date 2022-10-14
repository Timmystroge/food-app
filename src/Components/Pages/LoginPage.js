import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginbg from "../../assets/img/loginbg.svg";
import { ToggleShowHide } from "../../assets/script/Main";

const LoginPage = () => {
  //toggle show and hide password
  const [toggleshowandhide] = useState(false);
  const toggleText = () => {
    if (!toggleshowandhide) {
      ToggleShowHide();
    }
  };
  return (
    <div>
      <main>
        <div className="loginpage">
          <div className="loginbgimage">
            <img src={loginbg} alt="loginbgimage" className="login-img" />
          </div>
          <div className="login">
            <div className="login-wrapper">
              <div className="loginheader">
                <h3>Welcome Back!</h3>
              </div>
              <form action="" className="loginform" id="loginform">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email address"
                  required
                />
                <div className="password">
                  <span className="toggleText">
                    <p className="toggleText2" onClick={toggleText}>
                      show
                    </p>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    required
                  />
                </div>

                <div className="loginbtnwrapper">
                  <button type="submit" id="loginbtn" disabled>
                    LOGIN
                  </button>
                </div>
              </form>
              <div className="others">
                <Link to="/signup">Create an account</Link>
                <Link to="/forgotpassword">Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
