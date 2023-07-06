import { useTranslation } from "next-i18next";
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
import { Cursor } from "../../../components/cursor";

interface IBanner {
  handleShowContact?: () => void
}

const Banner = ({ handleShowContact }: IBanner) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Cursor isGelly={true} />
      <BannerWrapper>
        <Container>
          <ContentBanner>
            <HeadBanner>
              <Title $color={true} >{t("home.title")}</Title>
              <Intro>

                <DescriptionWrapper >
                  <Description $color={true}>{`${t("home.intro")}`}</Description>
                  <Description $color={true}>{`${t("home.intro_two")}`}</Description>
                  <ButtonContact data-cursor-exclusion style={{ color: '#000000' }} data-cursor-size="200px" onClick={handleShowContact}>
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
