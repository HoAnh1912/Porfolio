import styled from "styled-components";
import { device } from "../../../styles/media";

export const SkillWrapper = styled.section``;

export const ContentSkill = styled.div`
  h3 {
    margin-top: 10%;

    ${device.mobile} {
      padding-right: 0;
    }
  }
`;

export const ListSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5em;
`;

export const WrapperDes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${device.smallMobile} {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
