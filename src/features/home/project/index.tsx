import { useTranslation } from "next-i18next";
import { Container } from "../../../styles";
import {
  Description,
  DescriptionWrapper,
  Title,
} from "../../../styles/globals";
import BlockProject from "./components/list-project";
import { ContentProject, ProjectWrapper } from "./style";

const listProject = [
  {
    id: 1,
    name: "wooder",
    describe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "../images/project-first.jpg",
    link: "https://wooder-plum.vercel.app/",
  },
  {
    id: 2,
    name: "gbox",
    describe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "../images/project-second.jpg",
    link: "https://wooder-plum.vercel.app/",
  },
];

const Project = ({ projectSection }: any) => {
  const { t } = useTranslation("project");

  return (
    <ProjectWrapper ref={projectSection}>
      <Container className="container">
        <ContentProject>
          <Title>{t("project.title")}</Title>
          <DescriptionWrapper>
            <Description>
              {t("project.des")}
              <small>{t("project.des_small")}</small>
            </Description>
          </DescriptionWrapper>
          {listProject.map((item: any) => {
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
