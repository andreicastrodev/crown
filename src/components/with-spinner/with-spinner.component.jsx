import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedCocmponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrappedCocmponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
