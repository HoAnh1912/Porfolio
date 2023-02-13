import { device } from "./../../styles/media";
import styled from "styled-components";

export const MenuMobile = styled.div`
  display: none;
  width: 40px;
  height: 22px;
  position: relative;
  z-index: 300;
  cursor: pointer;
  span {
    width: 100%;
    height: 1px;
    display: block;
    background-color: black;
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    transition: 0.3s;
  }
  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    background-color: black;
    transition: 0.3s;
  }
  &:after {
    position: absolute;
    bottom: 0;
  }
  &.click {
    &:before {
      transform: rotate(45deg) translate(6px, 8px);
      transition: 0.3s;
      background-color: white;
    }
    span {
      opacity: 0;
      transition: 0.3s;
      background-color: white;
    }
    &:after {
      transform: rotate(-45deg) translate(4px, -8px);
      transition: 0.3s;
      background-color: white;
    }
  }
  ${device.mobile} {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
    transition: 0.3s;
  }
  ${device.mobile} {
    display: block;
    width: 100%;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    transform: initial;
    z-index: 100;
    opacity: 0;
    transition: 0.3s;
    padding-top: 20%;
    ul {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        margin: 0 auto;
        padding: 50px;
        text-align: center;
        a {
          color: white;
          text-decoration: none;
          font-size: 30px;
        }
      }
    }
  }
`;
