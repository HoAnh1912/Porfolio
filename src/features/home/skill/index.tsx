/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { listSkill } from "../../../constants/skills";
import { Container } from "../../../styles";
import {
  Description,
  DescriptionWrapper,
  Title,
  WrapperImage,
} from "../../../styles/globals";
import BlockSkill from "./component";
import { ContentSkill, ListSkill, SkillWrapper, WrapperDes } from "./style";



const Skill = () => {
  const { t } = useTranslation("skill");
  return (
    <SkillWrapper className="section">
      <Container>
        <ContentSkill>
          <Title $color={true}>{t("skill.title")}</Title>
          <DescriptionWrapper>
            <WrapperDes>
              <Description $color={true}>
                {t("skill.des")}
                <small> {t("skill.des_small")}</small>
              </Description>
              <WrapperImage width={150}>
                <img src="../images/github-integration.svg" alt="" />
              </WrapperImage>
            </WrapperDes>
          </DescriptionWrapper>
          <ListSkill>
            {listSkill.map((item) => {
              return (
                <BlockSkill
                  key={item.id}
                  name={item.name}
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
