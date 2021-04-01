import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
      </Link>
      {currentUser ? (
        <div className="header__option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="header__option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
