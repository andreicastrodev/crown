import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-btn/custom-btn.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
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

const mapState = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapState)(Cart);
