import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import registrationbg from "../../assets/img/registrationbg.svg";
import { ToggleShowHide, ValidateEmail } from "../../assets/script/Main";

const RegisterPage = () => {
  // toggle show and hide password
  const [toggleshowandhide] = useState(false);
  const toggleText = () => {
    if (!toggleshowandhide) {
      ToggleShowHide();
    }
  };

  // emailValidation
  useEffect(() => {
    ValidateEmail(document.querySelector("#registerform"));
  }, []);

  return (
    <div>
      <main>
        <div className="loginpage">
          <div className="loginbgimage">
            <img
              src={registrationbg}
              alt="loginbgimage"
              className="login-img"
            />
          </div>
          <div className="login">
            <div className="login-wrapper">
              <div className="loginheader">
                <h3>Welcome to Lilies!</h3>
              </div>
              <form
                action=""
                method="post"
                className="loginform"
                id="registerform"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your First Name"
                  required
                />
                <div className="validateemail">
                  <span className="feedback"></span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email address"
                    required
                  />
                </div>
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
                  <button type="submit" id="registerbtn" disabled>
                    SIGN UP
                  </button>
                </div>
              </form>
              <div className="other-login">
                <p>
                  Already have an account.? <Link to="/login">LOGIN</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
