import styled from "styled-components";
import { device } from "../../../../../styles/media";
import theme from "../../../../../styles/theme";

export const MyProject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
`;
export const DescribeProject = styled.div`
  flex-basis: 70%;
  margin-left: 10%;
  p {
    margin-bottom: 10rem;
  }
  a {
    color: ${theme.colors.ColorText};
    font-weight: 700;
  }
`;

export const ProjectName = styled.h4`
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  color: ${theme.colors.ColorText};
  font-size: 65px;
  font-weight: 700;
  ${device.mobile} {
    font-size: 32px;
  }
`;
