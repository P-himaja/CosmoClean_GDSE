import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo11.png";

const Header = () => {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Determine if it's the homepage
  const isHomePage = location.pathname === "/";

  const headerStyle = {
    backgroundImage: isHomePage ? `url("../src/images/image.jpg")` : "linear-gradient(to left,var(--primary-color),var(--secondary-color))",
  };

  return (
    <header style={headerStyle}>
      <div className="wrap">
        <div className="nav-area">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
