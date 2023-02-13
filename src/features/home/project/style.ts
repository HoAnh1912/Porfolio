import styled from "styled-components";
import theme from "../../../styles/theme";

export const ProjectWrapper = styled.section`
  background: ${theme.colors.background};
  margin-top: 200px;
  padding-top: 0;
  p {
    color: white;
  }
`;

export const ContentProject = styled.div`
  padding: 10% 0;
  h3 {
    margin-top: 10%;
  }
  .project-left {
    flex-direction: row-reverse;
    div {
      margin-right: 10%;
      margin-left: 0;
    }
  }
  .project-right {
  }
`;
