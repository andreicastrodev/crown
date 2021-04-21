import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  SignOut,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="header__logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionDiv to="/shop">SHOP</OptionDiv>
      <OptionDiv to="/shop">CONTACT</OptionDiv>
      {currentUser ? (
        <OptionDiv as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionDiv to="/signin">SIGN IN</OptionDiv>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapDispatch = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatch)(Header);
