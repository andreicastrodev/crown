import styled, { css } from "styled-components";

const googleSignInButton = css`
  background-color: #4285f4;
  margin-left: 2rem;
`;

const regularButton = css`
  color: white;
  background-color: black;
  outline: none;
  border: none;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInButton;
  else return regularButton;
};

export const CustomButtonContainer = styled.button`
  outline: none;
  cursor: pointer;
  padding: 1.5rem 5rem;
  color: white;
  background-color: black;
  text-transform: uppercase;
  margin-top: 3rem;
  outline: none;
  border: none;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
  ${getButtonStyles}
`;
