import React from "react";
import { Container } from "../../styles";
import { ContentFooter, FooterWrapper, InfoContact, Signature } from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentFooter>
          <h3>Let’s make something together!</h3>
          <InfoContact>
            <Link href="mailto:anhho191297@gmail.com">anhho191297@gmail.com</Link>
            {/* <Link href="tel: +0354780433">+0354780433</Link> */}
          </InfoContact>
          <Signature>Anh</Signature>
        </ContentFooter>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
