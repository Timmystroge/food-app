import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import registrationbg from "../../assets/img/registrationbg.svg";
import { ToggleShowHide, ValidateEmail } from "../../assets/script/Main";

const RegisterPage = () => {
  // registration
  let [pendingRegistration, setPendingRegistration] = useState(false);
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");

  // handle user registration
  const handleUserRegistration = (e) => {
    e.preventDefault();
    setPendingRegistration(true);
    class NewUser {
      constructor(username, useremail, userpassword) {
        this.name = username;
        this.email = useremail;
        this.password = userpassword;
      }
      registrationSuccess() {
        console.log("user registered successfully");
      }
      registrationSuccesspopup() {
        let msg = document.querySelector(".msg");
        msg.style.display = "block";
      }
      dismissMsg() {
        let msg = document.querySelector(".msg");
        msg.style.display = "none";
      }
    }
    // create a new User
    let user = new NewUser(userName, userEmail, userPassword);
    sessionStorage.setItem("user", JSON.stringify(user));
    // validation = show user validation and redirect them to login page
    setTimeout(() => {
      setPendingRegistration(false);
    }, 1500);
    setInterval(() => {
      user.registrationSuccesspopup();
      setInterval(() => {
        window.location = "/login";
      }, 1500);
    }, 1600);
  };

  //----------------------------------------------

  // toggle show and hide password
  const [toggleshowandhide] = useState(false);
  const toggleText = () => {
    if (!toggleshowandhide) {
      ToggleShowHide();
    }
  };

  //----------------------------------------------

  // emailValidation
  useEffect(() => {
    ValidateEmail(document.querySelector("#registerform"));
  }, []);

  //----------------------------------------------

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
                className="loginform"
                id="registerform"
                onSubmit={handleUserRegistration}
              >
                <div
                  className="msg"
                  style={{
                    backgroundColor: "mediumseagreen",
                    color: "white",
                    marginBottom: "20px",
                    padding: "10px",
                    fontSize: "13px",
                    borderRadius: "5px",
                    display: "none",
                  }}
                >
                  Registration Successful
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your First Name"
                  required
                />
                <div className="validateemail">
                  <span className="feedback"></span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
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
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Your Password"
                    required
                  />
                </div>

                <div className="loginbtnwrapper">
                  {!pendingRegistration && (
                    <button type="submit" id="registerbtn">
                      SIGN UP
                    </button>
                  )}
                  {pendingRegistration && (
                    <button id="registrationBtn" disabled>
                      Please Wait...
                    </button>
                  )}
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
