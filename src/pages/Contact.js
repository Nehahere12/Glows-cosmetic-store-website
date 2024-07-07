import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contacts">
      <h1 className="heads">CONTACT US</h1>
      <div className="contactpage">
        <div className="contactleft">
          <div className="contfirst">
            <h1> Glows-A cosmetics store</h1>
            <hr className="hey" />
          </div>
          <div className="contsecond">
            <h2>Contact us</h2>
            <p>Email:Glows189@gmail.com</p>
            <p>
              Phone: +91870-23489 <br /> +80654-89756
            </p>
          </div>

          <div className="contthird">
            <p>
              {" "}
              Address:Lane no 231, near Gaza complex, <br /> Opposite riya
              palace, Noida delhi
            </p>
          </div>
        </div>
        <div className="contactright">
          <div className="rightup">
            <h1>Send us message</h1>
            <hr className="hey" />
          </div>
          <div className="rightdown">
            <input type="text" placeholder="  Enter your name  " /> <br />
            <input type="text" placeholder="  Enter your email  " />
            <br />
            <input type="text" placeholder="  Enter your phone-no  " />
            <br />
            <button>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
