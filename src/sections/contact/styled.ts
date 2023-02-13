import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const ContactWrapper = styled.section`
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  background: ${theme.colors.background};
  width: 100%;
  height: 100vh;
  color: white;
  /* overflow-y: none; */
  h5 {
    margin-top: 5%;
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 2px;
    right: 5%;
    cursor: pointer;
    z-index: 9999;
  }
`;
export const ContentContact = styled.div`
  position: absolute;
  top: 15%;
  ${device.mobile} {
    top: 10%;
  }
`;
export const IntroContact = styled.div`
  position: relative;
  p {
    font-family: "Ginger";
    display: block;
    font-size: 126px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.3;
    letter-spacing: 8px;

    :nth-child(2) {
      padding-left: 180px;
      ${device.tablet} {
        padding-left: 60px;
      }
      ${device.mobile} {
        padding-left: 110px;
      }
      ${device.smallMobile} {
        padding-left: 0;
      }
    }
    span {
      color: ${theme.colors.hoverColor};
    }
    ${device.tablet} {
      font-size: 80px;
    }
    ${device.mobile} {
      font-size: 60px;
    }
    ${device.smallMobile} {
      font-size: 40px;
      text-align: center;
    }
    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      font-size: 90px;
      color: red;
    }
  }
  #img-myself {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 320px;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
    filter: blur(4px);
  }
  ${device.tablet} {
    padding-top: 15%;
  }
  ${device.mobile} {
    padding-top: 25%;
  }
  ${device.smallMobile} {
    padding-top: 10%;
  }
`;
export const ContactPhoneGmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15%;
  ${device.smallMobile} {
    padding-top: 10%;
    flex-direction: column;
    padding-right: 0;
  }
`;
export const WrapperPhone = styled.div`
  display: inline-flex;
  align-items: center;
  #arrow {
    width: 36px;
  }
`;
export const ContactPhone = styled.div`
  margin-left: 15px;
  a {
    font-family: "Ginger";
    text-decoration: none;
    color: ${theme.colors.ColorText};
    display: block;
    letter-spacing: 3px;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 5%;
  ${device.smallMobile} {
    padding-right: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const IntroMySelf = styled.div`
  width: 45%;
  padding-top: 5%;
  p {
    letter-spacing: 0;
    line-height: 2;
    :first-child {
      padding-bottom: 3%;
    }
    span {
      text-transform: uppercase;
      font-weight: bolder;
    }
    a {
      text-decoration: none;
      font-weight: bolder;
      color: ${theme.colors.ColorText};
      text-transform: uppercase;
    }
  }
  ${device.tablet} {
    width: 63%;
  }
  ${device.mobile} {
    width: 70%;
  }
  ${device.smallMobile} {
    width: 100%;
    padding-top: 20%;
  }
`;
export const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  cursor: pointer;

  svg {
    width: 40px;
    height: auto;
  }
  .icon {
    &:hover {
      fill: #5670f9;
      transition: 0.4s;
    }
  }
  .face {
    &:hover {
      fill: #0e8cf1;
      transition: 0.4s;
    }
  }
  .linkIn {
    &:hover {
      fill: #0a66c2;
      transition: 0.4s;
    }
  }
  .mail {
    &:hover {
      fill: #d42e35;
      transition: 0.4s;
    }
  }
  ${device.smallMobile} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 10%;
  }
`;
