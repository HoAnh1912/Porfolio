import { device } from "./../../../styles/media";
import styled from "styled-components";
import theme from "../../../styles/theme";

export const BannerWrapper = styled.section``;

export const ContentBanner = styled.div``;

export const HeadBanner = styled.div``;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${device.mobile} {
    flex-direction: column;
  }
`;

export const DetailInfo = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  h3 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.8;
    white-space: nowrap;
    font-weight: 500;
    ${device.mobile} {
      margin-bottom: 20px;
    }
  }
  ${device.mobile} {
    flex-direction: column;
  }
`;
export const TextInfo = styled.div`
  p {
    margin-left: 10%;
    :first-child {
      margin-bottom: 40px;
      ${device.mobile} {
        margin-bottom: 10px;
      }
    }
    ${device.mobile} {
      margin-left: 0;
    }
  }
`;
export const ButtonContact = styled.h4`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 5%;
  border: 3.5px double ${theme.colors.hoverColor};
  font-weight: 900;
  text-transform: uppercase;
  &:hover {
    background-color: ${theme.colors.hoverColor};
    transition: 0.4s;
    color: ${theme.colors.ColorText};
    cursor: pointer;
  }
`;
