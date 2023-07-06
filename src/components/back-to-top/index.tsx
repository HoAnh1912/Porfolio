/* eslint-disable @next/next/no-img-element */
import { WrapperToTop } from "./styled";

export const BackToTop = ({ goToTop, showTopBtn }: any) => {
  return (
    <>
      {showTopBtn && (
        <WrapperToTop onClick={goToTop}>
          <img src="../images/top.svg" alt=""  />
        </WrapperToTop>
      )}
    </>
  );
};
