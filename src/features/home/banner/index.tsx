import { useTranslation } from "next-i18next";
import CustomCursor from "../../../components/mouse-cursor";
import { Container } from "../../../styles";
import {
  Description,
  DescriptionWrapper,
  Title,
  WrapperImage,
} from "../../../styles/globals";
import {
  BannerWrapper,
  ButtonContact,
  ContentBanner,
  DetailInfo,
  HeadBanner,
  Intro,
  TextInfo,
} from "./style";

const Banner = ({ homeSection, handleShowContact }: any) => {
  const { t } = useTranslation("home");

  return (
    <>
      <BannerWrapper ref={homeSection}>
        <Container>
          <ContentBanner>
            <HeadBanner>
              <Title color>{t("home.title")}</Title>
              <Intro>
                <DescriptionWrapper>
                  <Description color>{`${t("home.intro")}`}</Description>
                  <Description color>{`${t("home.intro_two")}`}</Description>
                  <ButtonContact onClick={handleShowContact}>
                    Get Contact
                  </ButtonContact>
                </DescriptionWrapper>
                <WrapperImage width={100}>
                  <img src="../images/person.png" alt="" />
                </WrapperImage>
              </Intro>
            </HeadBanner>
            <DetailInfo>
              <h3>{`${t("home.intro_about_me")}`}</h3>
              <TextInfo>
                <p>{`${t("home.intro_major")}`}</p>
              </TextInfo>
            </DetailInfo>
          </ContentBanner>
        </Container>
      </BannerWrapper>
    </>
  );
};

export default Banner;
