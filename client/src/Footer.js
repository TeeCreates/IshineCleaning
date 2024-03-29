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
            <FiInstagram size={20} />
          </Linkk>
        </Li>
        <Li>
          <Linkk href="https://www.facebook.com/profile.php?id=100087243824796" target="_blank">
            <FaFacebookSquare size={20}/>
          </Linkk>
        </Li>
      </Ul>
      <UlContact>
        <Li>
          <StyleNavLink to="/contact">
            Contact Us
          </StyleNavLink>
        </Li>
        <div>
        <Li>
        Info@ishinemtl.ca
        </Li>
        <Li>
          (438) 270-6662
        </Li>
        </div>
      </UlContact>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  padding: 20px;
  display: flex;
  margin-top: 0px;
flex-direction: column;
align-items: flex-start;
  @media (max-width: 600px) {
  justify-content: space-between;
  flex-direction: row;
  }
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
  font-size: 24px;
  display: flex;
  justify-content: center; /* Align items horizontally in the center */
  align-items: center; /* Align items vertically in the center */
`;
const UlContact = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
flex-direction: column;
/* Align items horizontally in the center */
  align-items: flex-start; /* Align items vertically in the center */

`;

const Li = styled.li`
  list-style-type: none;
  position: relative;
  top: 5px;
  margin-left: 10px;
  font-size: 14px;
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
  height: 40px;
`;
