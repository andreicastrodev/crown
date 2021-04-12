import React from "react";
import "./custom-btn.styles.scss";
import { CustomButtonContainer } from "./custom-btn.styles";

const CustomBtn = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomBtn;
