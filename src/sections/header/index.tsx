import { useTranslation } from "next-i18next";
import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { MouseContext } from "../../components/mouse-cursor/context/MouseContextProvider";
import { Container } from "../../styles";
import { MenuType } from "../../type/menu.interface";
import HeaderMobile from "../header-mobile";
import { HeaderContainer, HeaderWrapper, Language, Logo, Menu } from "./styled";

interface IHeader {
  goToTop?: () => void
  homeSection?:any
  skillSection?:any
  projectSection?:any
}



const Header = ({
  homeSection,
  skillSection,
  projectSection,
  goToTop,
}: IHeader) => {

  const [header, setHeader] = useState(false);
  const { t } = useTranslation("common");
  
  const headerMenu: MenuType[] = [
    {
      id: "1",
      href: "/",
      label: t("header.nav_one"),
      nameSection: homeSection,
      chooseActive: "Home",
    },
    {
      id: "2",
      href: "/",
      label: t("header.nav_two"),
      nameSection: projectSection,
      chooseActive: "Project",
    },
    {
      id: "3",
      href: "/",
      label: t("header.nav_three"),
      nameSection: skillSection,
      chooseActive: "Skills",
    },
  ];


  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeLang = (lang: string) => {
    router.push("/", "/", { locale: lang });
  };
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <HeaderWrapper className={header ? "active" : ""}>
      <Container id="container">
        <HeaderContainer>
          <Logo onClick={goToTop}>ANHHO</Logo>
          <Menu
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            {/* {headerMenu.map((menu, index) => (
              <h4
                key={menu.id}
                onClick={() => {
                  scrollTo(menu.nameSection.current);
                }}
                className={`header_link ${
                  visibleSection === menu.chooseActive ? "selected" : ""
                }`}
              >
                {menu.label}
              </h4>
            ))} */}
          </Menu>
          <Language>
            <h4 onClick={() => changeLang("en")}>EN</h4>
            <h4 onClick={() => changeLang("vi")}>VN</h4>
          </Language>
          <HeaderMobile />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
