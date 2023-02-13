import React from "react";
import { Container } from "../../styles";
import { ContentFooter, FooterWrapper, InfoContact, Signature } from "./style";

const Footer = ({ contactSection }: any) => {
  return (
    <FooterWrapper ref={contactSection}>
      <Container>
        <ContentFooter>
          <h3>Let’s make something together!</h3>
          <InfoContact>
            <a href="mailto:anhho0508@gmail.com">thianhho0508@gmail.com</a>
            <a href="tel:0354780433">+354780433</a>
          </InfoContact>
          <Signature>Anh</Signature>
        </ContentFooter>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
