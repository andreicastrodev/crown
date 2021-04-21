import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  margin-right: 5rem;
`;

export const SignOut = css`
  font-size: 1.8rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  margin-right: 5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 8rem;
  width: 8rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-around;
`;

export const OptionDiv = styled(Link)`
  ${OptionContainerStyles}
`;
