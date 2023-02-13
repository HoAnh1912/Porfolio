import { WrapperToTop } from "./styled";

export const BackToTop = ({ goToTop, showTopBtn }: any) => {
  return (
    <>
      {showTopBtn && (
        <WrapperToTop onClick={goToTop}>
          <img src="../images/top.svg" alt="" />
        </WrapperToTop>
      )}
    </>
  );
};
