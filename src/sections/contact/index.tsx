import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Container } from "../../styles";
import { WrapperImage } from "../../styles/globals";
import {
  ContactPhone,
  ContactPhoneGmail,
  ContactWrapper,
  ContentContact,
  IntroContact,
  IntroMySelf,
  Social,
  SocialWrapper,
  WrapperPhone,
} from "./styled";

const Contact = ({ showContact, handleContact }: any) => {
  return showContact ? (
    <ContactWrapper>
      <Container>
        <h5 onClick={handleContact}>Close</h5>
        <ContentContact>
          <IntroContact>
            <p>Welcome to</p>
            <p>the workspace</p>
            <p>
              of <span>Anh Ho</span>
            </p>
            <WrapperImage width={100} id="img-myself">
              <img src="../images/my-img.jpg" alt="" />
            </WrapperImage>
            <ContactPhoneGmail>
              <WrapperPhone>
                <WrapperImage width={100} id="arrow">
                  <img src="../images/arrow-right.svg" alt="" />
                </WrapperImage>
                <ContactPhone>
                  <a href="mailto:anhho0508@gmail.com">
                    thianhho0508@gmail.com
                  </a>
                  <a href="tel:0354780433">+354780433</a>
                </ContactPhone>
              </WrapperPhone>
            </ContactPhoneGmail>
          </IntroContact>
          <SocialWrapper>
            <IntroMySelf>
              <p>Hello! I’m Anh Ho</p>
              <p>
                I work as the <span>front-end developer</span>. I am ready to
                collaborate with new opportunities and challenges as a
                freelancer for web design and development.
              </p>
            </IntroMySelf>
            <Social>
              <Link href="https://github.com/HoAnh1912">
                <GitHubIcon className="icon" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100005531386995">
                <FacebookIcon className="face" />
              </Link>
              <Link href="https://www.linkedin.com/in/h%E1%BB%93-th%E1%BB%8B-%C3%A1nh-89230618b/">
                <LinkedInIcon className="linkIn" />
              </Link>
              <Link href="mailto: thianhho0508@gmail.com">
                <EmailRoundedIcon className="mail" />
              </Link>
            </Social>
          </SocialWrapper>
        </ContentContact>
      </Container>
    </ContactWrapper>
  ) : null;
};

export default Contact;
