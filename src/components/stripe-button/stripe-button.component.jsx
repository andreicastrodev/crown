import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IewsDL5frjKR8weBxxCbeJS1RahYU6wvduHcEeq3e0zbUu67G0sE8coTh6GHWW0LgaJ7nu6clJ0qwCLiOFQSGHs00VjdlrtbW";

  const onToken = (token) => {
    console.log(token);
    alert(`Payment Successful`);
  };
  return (
    <div className="stripe">
      <StripeCheckout
        label="Pay now!"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/en/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
