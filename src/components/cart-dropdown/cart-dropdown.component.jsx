import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-btn/custom-btn.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.styles.scss";
const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapState)(Cart);
