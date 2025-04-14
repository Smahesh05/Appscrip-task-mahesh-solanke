import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import GPAY from "../../assets/Group 136188.png";
import MASTER from "../../assets/Group 136190.png";
import PAYPEL from "../../assets/Group 136192.png";
import AMEX from "../../assets/Group 136193.png";
import APPLEPAY from "../../assets/Group 136194.png";
import COLPAY from "../../assets/Group 136195.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Newsletter */}
        <div className="footer-column">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        {/* Currency */}
        <div className="footer-column">
          <h4>CURRENCY</h4>
          <p>
            <img src="https://flagcdn.com/us.svg" width="20" alt="US Flag" />{" "}
            USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      {/* Footer Links */}
      <div className="footer-links">
        {/* Column 1: About */}
        <div className="footer-column">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}

        <div className="footer-column">
          <div className="">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Column 4: Payments */}
          <div className="">
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src={GPAY} alt="Google Pay" />
              <img src={MASTER} alt="MasterCard" />
              <img src={PAYPEL} alt="PayPal" />
              <img src={AMEX} alt="American Express" />
              <img src={APPLEPAY} alt="Apple Pay" />
              <img src={COLPAY} alt="COL Pay" />
            </div>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
