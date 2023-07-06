import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../../public/fonts/font.css";
import '../components/cursor/cursor.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
