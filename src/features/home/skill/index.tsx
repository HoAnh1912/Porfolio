import { useTranslation } from "next-i18next";
import { renderToHTML } from "next/dist/server/render";
import { Container } from "../../../styles";
import {
  Description,
  DescriptionWrapper,
  Title,
  WrapperImage,
} from "../../../styles/globals";
import BlockSkill from "./component";
import { ContentSkill, ListSkill, SkillWrapper, WrapperDes } from "./style";

const listSkill = [
  {
    id: 1,
    name: "html",
  },
  {
    id: 2,
    name: "css/scss",
  },

  {
    id: 3,
    name: "javascript",
  },
  {
    id: 4,
    name: "typescript",
  },
  {
    id: 5,
    name: "react js",
  },
  {
    id: 6,
    name: "next js",
  },
  {
    id: 7,
    name: "photoshop",
  },
  {
    id: 8,
    name: "figma",
  },
];

const Skill = ({ skillSection }: any) => {
  const { t } = useTranslation("skill");
  return (
    <SkillWrapper className="section" ref={skillSection}>
      <Container>
        <ContentSkill>
          <Title color>{t("skill.title")}</Title>
          <DescriptionWrapper>
            <WrapperDes>
              <Description color>
                {t("skill.des")}
                <small> {t("skill.des_small")}</small>
              </Description>
              <WrapperImage width={150}>
                <img src="../images/github-integration.svg" alt="" />
              </WrapperImage>
            </WrapperDes>
          </DescriptionWrapper>
          <ListSkill>
            {listSkill.map((item: any) => {
              return (
                <BlockSkill
                  key={item.id}
                  nameSkill={item.name}
                  imageSkill={item.img}
                />
              );
            })}
          </ListSkill>
        </ContentSkill>
      </Container>
    </SkillWrapper>
  );
};

export default Skill;
