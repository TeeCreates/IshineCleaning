import { theme } from "./styles/theme";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Ul> Social Media
        <Li>
          <Link href="your-instagram-url" target="_blank">
            Instagram
          </Link>
        </Li>
        <Li>
          <Link href="your-facebook-url" target="_blank">
            Facebook
          </Link>
        </Li>
      </Ul>
      <Ul>
        Free Quote
        <Li>
          <Link href="your-contact-url" target="_blank">
            Contact Us
          </Link>
        </Li>
      </Ul>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

`;

const Link = styled.a`
  font-size: 17px;
  font-weight: 500;
  color: white;
  text-decoration: none;


`;

const Ul = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
  :hover{
      color:#34495e;
  }
`;
