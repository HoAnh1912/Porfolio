import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { i18n, useTranslation } from "next-i18next";
import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { MouseContext } from "../../components/mouse-cursor/context/MouseContextProvider";
import { Container } from "../../styles";
import HeaderMobile from "../header-mobile";
import { HeaderContainer, HeaderWrapper, Language, Logo, Menu } from "./styled";

gsap.registerPlugin(ScrollTrigger);

export interface MenuType {
  href: string;
  children?: MenuType[];
  label: string;
  id: string;
  nameSection: string;
  chooseActive?: string;
}

const nearestIndex = (
  currentPosition: number,
  sectionPositionArray: Array<any>,
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};
const Header = ({
  homeSection,
  skillSection,
  projectSection,
  visibleSection,
  scrollTo,
  headerSection,
  goToTop,
}: any) => {
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

  const [header, setHeader] = useState(false);

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

  const changeLang = (lang: any) => {
    router.push("/", "/", { locale: lang });
  };
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <HeaderWrapper className={header ? "active" : ""} ref={headerSection}>
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
          </Language>{" "}
          <HeaderMobile />{" "}
        </HeaderContainer>{" "}
      </Container>{" "}
    </HeaderWrapper>
  );
};

export default Header;
