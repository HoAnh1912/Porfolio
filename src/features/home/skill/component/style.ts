import styled from "styled-components";
import { device } from "../../../../styles/media";
import theme from "../../../../styles/theme";

export const SkillItem = styled.div`
  flex: 0 0 20%;
  padding-right: 0.71429rem;
  padding-left: 0.71429rem;
  position: relative;
  margin-bottom: 40px;

  ${device.smallMobile} {
    margin-bottom: 0;
    padding-right: 0.1rem;
    padding-left: 0.1rem;
  }
`;

export const SkillItemInner = styled.p`
  height: 22.10526vw;
  text-transform: capitalize;
  border: 1px solid ${theme.colors.border};
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vw;
  background: linear-gradient(#000 0 0) top / var(--p, 0) no-repeat;
  transition: 0.4s, background-position 0s;
  cursor: pointer;
  text-align: center;
  padding: 5px;

  ${device.tablet} {
    font-size: 24px;
  }
  ${device.mobile} {
    font-size: 18px;
  }
  ${device.smallMobile} {
    margin-bottom: 20px;
    height: 20vw;
    font-size: 14px;
  }
  &:hover {
    color: ${theme.colors.ColorText};
    transition: 0.4s;
    --p: 100%;
    background-position: bottom;
    background: linear-gradient(#000 0 0) top / var(--p, 0) no-repeat;
    transition: 0.4s, background-position 0s;
  }
`;
