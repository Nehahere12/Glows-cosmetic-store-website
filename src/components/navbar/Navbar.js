import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  //
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //
  const navigate = useNavigate();

  const handleMenuItemsClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("hees", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70, // Adjust this offset if you have a fixed header
      });
    }, 100); // Adjust the delay as needed
  };
  const handleSignIn = () => {
    navigate("/form");
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };
  return (
    <>
      <div className="navbar">
        <div className="navbarleft">
          <h2>Glows</h2>
        </div>
        <div className={`navbarcenter ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={handleMenuItemClick}>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li onClick={handleMenuItemClick}>
              <NavLink to="/hair" activeClassName="active">
                Hair
              </NavLink>
            </li>
            <li onClick={handleMenuItemClick}>
              <NavLink to="/eyes" activeClassName="active">
                Eyes
              </NavLink>
            </li>
            <li onClick={handleMenuItemClick}>
              <NavLink to="/lips" activeClassName="active">
                Lips
              </NavLink>
            </li>
            <li onClick={handleMenuItemClick}>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li onClick={handleMenuItemsClick}>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`navbarright ${isMenuOpen ? "hide" : ""}`}>
          <input type="text" placeholder="search here" />
          <i className="fa-solid fa-magnifying-glass"></i>
          <button onClick={handleSignIn}>Sign in</button>
        </div>
        <img
          className="menu"
          src="menu.jpg"
          alt="Menu"
          onClick={handleMenuClick}
        />
      </div>
    </>
  );
};

export default Navbar;
