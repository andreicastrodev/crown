import React from "react";
import "./custom-btn.styles.scss";

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? `custom-btn--google ` : ""} custom-btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomBtn;
