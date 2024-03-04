import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import footerlogo from "./Assets/footerlogo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Ul>
        <LogoImage src={footerlogo} alt="" />
        <Li>
          <Linkk href="https://www.instagram.com/ishine_mtl/" target="_blank">
            <FiInstagram />
          </Linkk>
        </Li>
        <Li>
          <Linkk href="https://www.facebook.com/profile.php?id=100087243824796" target="_blank">
            <FaFacebookSquare />
          </Linkk>
        </Li>
      </Ul>
      <Ul>
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
  justify-content: space-between;
  margin-top: 0px;
`;

const Linkk = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #89cff0;
  }
  &:visited {
    color: white;
  }
  &:active {
    color: #89cff0; /* Change color when clicked */
  }
`;

const Ul = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center; /* Align items horizontally in the center */
  align-items: center; /* Align items vertically in the center */
`;

const Li = styled.li`
  list-style-type: none;
  position: relative;
  top: 5px;
  margin-left: 10px;
`;

const StyleNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #89cff0;
  }
  &:visited {
    color: white;
  }
  &:active {
    color: #89cff0; /* Change color when clicked */
  }
`;

const LogoImage = styled.img`
  height: 35px;
`;
