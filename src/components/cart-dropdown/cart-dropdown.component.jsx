import React from "react";

import CustomButton from "../custom-btn/custom-btn.component";
import "./cart-dropdown.styles.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  </div>
);

export default Cart;
