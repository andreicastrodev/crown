import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link to="/" className="header__logo-container">
      <Logo className="header__logo" />
    </Link>
    <div className="header__options">
      <Link to="/shop" className="header__option">
        SHOP
      </Link>
      <Link to="/shop" className="header__option">
        CONTACT
      </Link>{" "}
    </div>
  </div>
);

export default Header;
