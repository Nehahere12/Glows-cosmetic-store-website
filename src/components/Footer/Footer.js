import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="one">
          <div className="wrap">
            {" "}
            <h2>TRUSTED BY OUR FAM!!!!</h2>
          </div>

          <div className="low">
            <div className="sees">
              <h2> 2012</h2>
              <p>Founded</p>
            </div>
            <div className="sees">
              <h2> 2k+</h2>
              <p>Products</p>
            </div>
            <div className="sees">
              <h2> 25+</h2>
              <p>Brands</p>
            </div>
            <div className="sees">
              <h2> 1M+</h2>
              <p>Orders delivered</p>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="up">
            <h1>100% authentic</h1>
            <p>Guarrantee program</p>
          </div>
          <div className="up">
            <h1>Free shipping</h1>
            <p>Above 600 rupees</p>
          </div>
          <div className="up">
            <h1>Secured payment</h1>
            <p>100% guarranteed</p>
          </div>
        </div>
        <div className="three">
          <h1>Dont miss an important update!!</h1>
          <p>
            The latest product drops, offers and stories straight to <br /> your
            phone, plus 20% off your next order
          </p>
          <input type="text" placeholder="                 Enter your email" />
          <br />
          <button> Subscribe</button>
        </div>
        <div className="four">
          <div className="left">
            <h2>Quick links</h2>
            <ul className="f">
              <li>About us</li>
              <li>Contact us</li>
              <li>Terms and conditions</li>
              <li>Policies</li>
            </ul>
          </div>
          <div className="center">
            <h2>Categories</h2>
            <ul className="g">
              <li>Eyes</li>
              <li>Lips</li>
              <li>Hair</li>
              <li>Body</li>
            </ul>
          </div>
          <div className="Right">
            <div className="rightup">
              <h1>Help desk</h1>
              <h2>Email:Glowsmakeup@gmal.com</h2>
              <h2>Contact:+91123-11234</h2>
              <h2>Monday-Saturaday-open 24hours</h2>
            </div>
            <div className="rightdown">
              <h2>Follow us on</h2>
              <div className="icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
