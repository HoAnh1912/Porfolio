import styled from "styled-components";
import { device } from "./media";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 0 16px;

  ${device.tablet} {
    max-width: 960px;
    padding: 0px 24px;
  }

  ${device.desktop} {
    max-width: 1440px;
    padding: 0px 20px;
  }
`;
