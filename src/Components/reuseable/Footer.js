import React, {useState, useEffect } from "react";
import googleplay from "../../assets/icons/googleplay.svg";
import appstore from "../../assets/icons/appstore.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const [message] = useState("This Page is not availabel yet!");
  const [socialmessage] = useState("Link to this page not active yet!");
  const warning = () => {
    alert(message);
  };
  const socialWarning = () => {
    alert(socialmessage)
  }
  useEffect(() => {
    const copy = document.querySelector(".year");
    let now = new Date();
    let year = now.getFullYear();
    copy.textContent = year;
  }, []);
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="footer-items">
              <div className="company">
                <h4>Company</h4>
                <ul>
                  <Link to="#" onClick={warning}>
                    <li>About Us</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Careers</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
              <div className="support">
                <h4>Support</h4>
                <ul>
                  <Link to="#" onClick={warning}>
                    <li>Help Center</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Safety Center</li>
                  </Link>
                </ul>
              </div>
              <div className="legal">
                <h4>Legal</h4>
                <ul>
                  <Link to="#" onClick={warning}>
                    <li>Cookies Policy</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Terms of Service</li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>Dispute resolution</li>
                  </Link>
                </ul>
              </div>
              <div className="installapp">
                <h4>Install App</h4>
                <ul>
                  <Link to="#" onClick={warning}>
                    <li>
                      <img src={googleplay} alt="" />
                    </li>
                  </Link>
                  <Link to="#" onClick={warning}>
                    <li>
                      <img src={appstore} alt="" />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copywrite">
          <div className="container">
            <div className="copywrite-wrapper">
              <div className="copywrite">
                <h5>
                  Copywrite © <span className="year"></span> LILIES, All rights
                  reserved | Designed & Developed By{" "}
                  <a href="https://timmyoyetola.tmtech.com.ng">TMtechnology</a>
                </h5>
              </div>
              <div className="socials">
                <ul>
                  <Link to="#" onClick={socialWarning}>
                    <li>
                      <img
                        src={instagram}
                        alt="instagram"
                        title="Send us a dm on instagram"
                      />
                    </li>
                  </Link>
                  <Link to="#" onClick={socialWarning}>
                    <li>
                      <img
                        src={twitter}
                        alt="twitter"
                        title="Send us a Dm on twitter"
                      />
                    </li>
                  </Link>
                  <Link to="#" onClick={socialWarning}>
                    <li>
                      <img
                        src={youtube}
                        alt="youtube"
                        title="Connect with us on Youtube"
                      />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
