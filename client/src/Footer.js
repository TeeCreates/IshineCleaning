import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Ul>
        Social Media
        <Li>
          <Linkk href="https://www.instagram.com/ishine_mtl/" target="_blank">
            Instagram
          </Linkk>
        </Li>
        <Li>
          <Linkk href="https://www.facebook.com/profile.php?id=100087243824796" target="_blank">
            Facebook
          </Linkk>
        </Li>
      </Ul>
      <Ul>
        Free Quote
        <Li>
          <StyleNavLink to="/contact">
            Contact Us
          </StyleNavLink>
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

const Linkk = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
font-size: 15px;
  &:hover {
    color: #89cff0;
  }
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
`;

const StyleNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #89cff0;
  }
`;
