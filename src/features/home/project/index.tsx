import { useTranslation } from "next-i18next";
import { Container } from "../../../styles";
import {
  Description,
  DescriptionWrapper,
  Title,
} from "../../../styles/globals";
import BlockProject from "./components/list-project";
import { ContentProject, ProjectWrapper } from "./style";
import { listProject } from "../../../constants/project";



const Project = () => {
  const { t } = useTranslation("project");

  return (
    <ProjectWrapper >
      <Container className="container">
        <ContentProject>
          <Title>{t("project.title")}</Title>
          <DescriptionWrapper>
            <Description>
              {t("project.des")}
              <small>{t("project.des_small")}</small>
            </Description>
          </DescriptionWrapper>
          {listProject.map((item) => {
            let positionProject = "";
            if (item.id % 2 == 0) {
              positionProject = "project-left";
            } else {
              positionProject = "project-right";
            }
            return (
              <BlockProject
                key={item.id}
                nameProject={item.name}
                describe={item.describe}
                image={item.img}
                className={positionProject}
                linkProject={item.link}
              />
            );
          })}
        </ContentProject>
      </Container>
    </ProjectWrapper>
  );
};

export default Project;
