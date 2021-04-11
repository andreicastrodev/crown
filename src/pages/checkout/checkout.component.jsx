import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotals,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      <h1 className="test-warning__msg">
        {" "}
        * PLEASE USE THE TEST CREDIT CARD PRODIVED HERE, I WON'T HOLD ANY
        LIABILITIES IF YOU USED YOUR OWN CARD*
      </h1>
      <span className="test-warning__card">
        4242 4242 4242 4242 - EXP 01/22 - CVV: 123{" "}
      </span>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotals,
});

export default connect(mapState)(CheckoutPage);
