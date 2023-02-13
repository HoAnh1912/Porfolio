import { theme } from "./../../styles/theme";
import styled from "styled-components";

export const WrapperToTop = styled.div`
  position: fixed;
  top: 80%;
  left: 90%;
  background: ${theme.colors.hoverColor};
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
  img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: 13px;
    text-align: center;
  }
`;
