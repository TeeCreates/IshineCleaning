import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./Assets/logo.png";
import { theme } from "./styles/theme";
import { useLanguage} from './LanguageContext';
import { useState } from "react"; // Import useState hook
import { useHistory } from "react-router-dom"; // Import useHistory hook

const Navbar = () => {
const {language, setLanguage} = useLanguage()
const [homeText, setHomeText] = useState('Home');
const [serviceText, setServiceText] = useState('Services');
  const [showMenu, setShowMenu] = useState(false); // Initialize state for menu visibility




  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility when clicked
  };

  const closeMenu = () => {
    setShowMenu(false); // Close the menu
  };
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
    setHomeText(language === 'en' ? 'Accueil' : 'Home');
    setServiceText(language === 'en' ? 'Nos Service' : 'Services');

  };




  let LinkStyle = {
    color: "black",
    margin: "10px",
    textDecoration: "none",
  };

  return (
    <Wrapper>
      <LogoDiv>
        <Logo src={logo} alt="" />
        <Name>I SHINE</Name>
      </LogoDiv>

      {/* Render hamburger icon or "X" icon based on showMenu state */}
      <HamburgerIcon onClick={toggleMenu}>
        {showMenu ? (
          // "X" icon when the menu is open
          <CloseIcon>&times;</CloseIcon>
        ) : (
          // Hamburger icon when the menu is closed
          <>
            <div></div>
            <div></div>
            <div></div>
          </>
        )}
      </HamburgerIcon>

      {/* Render navigation links conditionally based on showMenu state */}
      <NavLinks showMenu={showMenu}>
        <NavLink
          to="/"
          activeStyle={{ fontWeight: "bold" }}
          style={LinkStyle}
          exact
          onClick={closeMenu} // Close the menu when a link is clicked
        >
       {homeText}
        </NavLink>

        <NavLink
          to="services"
          activeStyle={{ fontWeight: "bold" }}
          style={LinkStyle}
          exact
          onClick={closeMenu} // Close the menu when a link is clicked
        >
       {serviceText}
        </NavLink>
        <NavLink
          to="contact"
          activeStyle={{ fontWeight: "bold" }}
          style={LinkStyle}
          exact
          onClick={closeMenu} // Close the menu when a link is clicked
        >
          Contact
        </NavLink>
     
<div>
<TranslateBtn language={language} targetLanguage="en" onClick={toggleLanguage}>
  En
</TranslateBtn>
<TranslateBtn language={language} targetLanguage="fr" onClick={toggleLanguage}>
  Fr
</TranslateBtn>
</div>
      </NavLinks>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.15); 
box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.15);
  /* background-color: ${theme.primaryColor}; */
`;

const TranslateBtn = styled.span`
  margin-right: 10px;
  font-size: 25px;
  font-weight: ${({ language, targetLanguage }) => 
    language === targetLanguage ? 'bold' : 'normal'};
`;

const Name = styled.h1`
  color: #89cff0;
  font-size: 30px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  /* Use media query to hide/show navigation links based on screen width */
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")}; /* Hide off-screen by default */
    width: 100%;
    background-color: ${theme.primaryColor};
    color: black;
    transition: left 0.3s ease-in-out;
    height: 100vh;
    justify-content: space-evenly;
    z-index: 999;

    
  }

  /* Style for navigation links in mobile view */
  a {
    padding: 10px;
    text-align: center;
    width: 100%;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 40px;
      &.active {

    color: white !important; /* Change to the desired text color when active */
  }
  }
  }
`;

const HamburgerIcon = styled.div`
  display: none; /* Hide by default for larger screens */

  /* Use media query to display hamburger icon for smaller screens */
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    div {
      width: 25px;
      height: 3px;
      background-color: black; /* Set the color to black */
      margin: 4px 0;
      margin-right: 10px;
      
    }
  }
`;

const CloseIcon = styled.span`
  font-size: 45px;
  color: black;
  cursor: pointer;
  margin-right: 10px;

`;
