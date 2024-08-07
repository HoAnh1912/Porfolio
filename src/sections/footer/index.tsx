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
            <Link href="mailto:hoanh1912.me@gmail.com">
              hoanh1912.me@gmail.com
            </Link>
            {/* <Link href="tel: +0354780433">+0354780433</Link> */}
          </InfoContact>
          <Signature>Anh</Signature>
        </ContentFooter>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
