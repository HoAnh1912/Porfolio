import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const FooterWrapper = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.ColorText};
  margin-top: 80px;
`;
export const ContentFooter = styled.div`
  padding: 150px 0 40px 0;
  h3 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 40px;
    ${device.mobile} {
      font-size: 20px;
    }
    ${device.smallMobile} {
      font-size: 18px;
      letter-spacing: 5px;
      margin-bottom: 20px;
    }
  }
  ${device.mobile} {
    padding: 80px 0 20px 0;
  }
  ${device.smallMobile} {
    padding: 10px 0 20px 0;
  }
`;
export const InfoContact = styled.div`
  text-align: center;
  a {
    font-size: 70px;
    display: block;
    color: ${theme.colors.ColorText};
    letter-spacing: 5px;
    :last-child {
      margin: 60px 0;
      font-size: 20px;
      ${device.mobile} {
        margin: 30px 0;
      }
      ${device.smallMobile} {
        margin: 10px 0;
        font-size: 16px;
      }
    }
    ${device.tablet} {
      font-size: 48px;
    }
    ${device.mobile} {
      font-size: 28px;
      letter-spacing: 3px;
    }
    ${device.smallMobile} {
      font-size: 18px;
    }
  }
`;
export const Signature = styled.h3`
  font-family: "signature";
  font-weight: normal;
  font-style: normal;
  text-transform: none !important;
  font-size: 50px;
  ${device.mobile} {
    font-size: 50px !important;
    margin-top: 40px;
  }
`;
