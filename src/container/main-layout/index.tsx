import React from "react";
import MouseContextProvider from "../../components/mouse-cursor/context/MouseContextProvider";
import { MainLayoutWrapper } from "./styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <MouseContextProvider>
      <MainLayoutWrapper >
        {children}
      </MainLayoutWrapper>
    </MouseContextProvider>
  );
};

export default MainLayout;
