/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BackToTop } from "../components/back-to-top";
import MainLayout from "../container/main-layout";
import Banner from "../features/home/banner";
import Project from "../features/home/project";
import Skill from "../features/home/skill";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { GlobalStyle } from "../styles/globals";
import Spline from '@splinetool/react-spline';
import { Cursor } from "../components/cursor";


export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "project",
        "skill",
      ])),
    },
  };
};

const Home: NextPage = (props) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      <Cursor isGelly={true} />
      <Head>
        <title>My Porfolio</title>
      </Head>
      <MainLayout >
        <Header
          goToTop={goToTop}
        />
        <Banner
          handleShowContact={handleShowContact}
        />
        {/* <Spline scene="https://prod.spline.design/nUMoJgzwcbLWpHDe/scene.splinecode" /> */}
        <div ><Project /></div>
        <div><Skill /></div>
        <div><Footer /></div>
        <BackToTop showTopBtn={showTopBtn} goToTop={goToTop} />
        <Contact
          showContact={showContact}
          handleContact={handleShowContact}
        />
        <GlobalStyle />
      </MainLayout>
    </>
  );
};

export default Home;
