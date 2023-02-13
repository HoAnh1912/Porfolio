import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../../public/fonts/font.css";
import MouseContextProvider from "../components/mouse-cursor/context/MouseContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
