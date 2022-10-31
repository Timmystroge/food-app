import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginbg from "../../assets/img/loginbg.svg";
import { ToggleShowHide } from "../../assets/script/Main";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  let loginMsg = (text) => {
    let loginmsg = document.querySelector(".loginmsg");
    loginmsg.style.display = "block";
    loginmsg.textContent = text;
  };
  let clearloginMsg = () => {
    let loginmsg = document.querySelector(".loginmsg");
    loginmsg.style.display = "none";
  };
  let loginError = (text) => {
    let loginerror = document.querySelector(".loginerror");
    loginerror.style.display = "block";
    loginerror.textContent = text;
  };
  let clearloginError = () => {
    let loginerror = document.querySelector(".loginerror");
    loginerror.style.display = "none";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem("user"));

    if (loginEmail !== " " && loginPassword !== " ") {
      if (loginEmail === user.email && loginPassword === user.password) {
        setTimeout(() => {
          loginMsg("Login Successful! : )");
          setTimeout(() => {
            clearloginMsg();
            setTimeout(() => {
              window.location = '/Components/Pages/dashboard/Dashboard';
            }, 100)
          }, 2000);
        }, 100);
      } else {
        setTimeout(() => {
          loginError("invalid credentials");
          setTimeout(() => {
            clearloginError();
          }, 3000);
        }, 100);
      }
    } else {
      loginError("login details not found");
    }
  };

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
              <form onSubmit={handleLogin} className="loginform" id="loginform">
                <div
                  className="loginmsg"
                  style={{
                    backgroundColor: "mediumseagreen",
                    color: "white",
                    marginBottom: "20px",
                    padding: "10px",
                    fontSize: "13px",
                    borderRadius: "5px",
                    display: "none",
                  }}
                ></div>
                <div
                  className="loginerror"
                  style={{
                    backgroundColor: "crimson",
                    color: "white",
                    marginBottom: "20px",
                    padding: "10px",
                    fontSize: "13px",
                    borderRadius: "5px",
                    display: "none",
                  }}
                >
                  Invalid details : (
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setLoginEmail(e.target.value)}
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
                    onChange={(e) => setloginPassword(e.target.value)}
                    placeholder="Your Password"
                    required
                  />
                </div>

                <div className="loginbtnwrapper">
                  <button type="submit" id="loginbtn">
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
