import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import loginbg from "../../assets/img/loginbg.svg";
import { ValidateEmail } from "../../assets/script/Main";

const Forgotpassword = () => {
  // emailValidation
  useEffect(() => {
    ValidateEmail(document.querySelector("#forgotpasswordform"));
  }, []);

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
                <h3>Enter Your Email!</h3>
                <p>To Recover your password, Please provide your Email</p>
              </div>
              <form action="" className="loginform" id="forgotpasswordform">
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

                <div className="loginbtnwrapper">
                  <button type="submit" id="forgotpasswordbtn" disabled>
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="other-login">
                <p>
                  Remember your password.? <Link to="/login">LOGIN</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forgotpassword;
