import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;

  ${device.mobile} {
    height: 50px;
  }
  &.active {
    box-shadow: 0px 1px 28px rgba(20, 30, 55, 0.06);
    background: black;
    color: white;
    a {
      color: white;
    }
  }
  #container {
    height: 100%;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-behavior: smooth;
  height: 100%;
`;
export const Logo = styled.a`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  color: black;
  scroll-behavior: smooth;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const Language = styled.div`
  display: flex;
  h4:first-of-type {
    margin-right: 10px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .header_link {
  }
  .selected {
    color: ${theme.colors.hoverColor};
    transition: 0.4s;
  }
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: inline-block;

    &:after {
      display: block;
      content: "";
      border-bottom: 3px solid ${theme.colors.hoverColor};
      transform: scaleX(0);
      transition: transform 0.35s ease-in-out;
      transform-origin: 100% 50%;
    }
    :hover::after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
    :hover {
      color: ${theme.colors.hoverColor};
      transition: 0.4s;
    }
  }
  h4:not(:last-child) {
    padding-right: 60px;
    letter-spacing: 1.5px;
  }
  ${device.mobile} {
    display: none;
  }
`;
