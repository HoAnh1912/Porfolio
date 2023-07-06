import styled, { createGlobalStyle } from "styled-components";
import { device } from "./media";
import theme from "./theme";

interface ColorProps {
  $color?: boolean;
}
export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Source Code Pro', monospace;
  
}

html{
  height:100vh;
}

body{
  height:auto;
  min-height: 100%;  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
 #__next{
  height:auto;
  min-height: 100vh;
}
*,
  :after,
  :before {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    margin: 0;
  }

  h1 {
    font-size: 56px;
    font-weight: 900;
    line-height: 55px;
    
  }
  
  h2 {
    font-size: 32px;
    font-weight: 900;
    line-height: 44px;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }

  //body2
  h6 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  a {
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    text-decoration: underline;
    scroll-behavior: smooth;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 1.5px;

  }
  small {
    font-size: 1rem;
    display: block;
    line-height: 1.6;
    font-weight: 600;
  }
  section{
    padding-top:${theme.padding.paddingSection};
   ${device.noDesktop}{
    padding-top: ${theme.padding.paddingSectionTablet};
   }
  
  }
`;

export const WrapperImage = styled.div<{ width?: number }>`
  width: ${({ width }) => width ?? "105"}%;
`;

export const Title = styled.h1<ColorProps>`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 115px;
  color: ${color =>
    color.$color ? "black" : "white"};
  ${device.tablet} {
    font-size: 97px;
  }
  ${device.mobile} {
    font-size: 80px;
  }
  ${device.smallMobile} {
    font-size: 50px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-left: 10%;
  ${device.noDesktop} {
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const Description = styled.h3<ColorProps>`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.8;
  color: ${ color  => (color.$color == true ? "black" : "white")};
  ${device.tablet} {
    font-size: 23px;
  }
  ${device.mobile} {
    font-size: 18px;
  }
`;
