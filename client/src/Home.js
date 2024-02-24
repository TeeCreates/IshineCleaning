import styled from "styled-components";
import banner from "./Assets/banner.jpg";
import theme from "./styles/theme";
import { MiniServices } from "./MiniServices";
import { About } from "./About";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { language } = useLanguage();
  const quoteBox = {
    en: {
      mess: "Your Mess,",
      mission: "Our Mission",
      quote: "Free Quote",
    },
    fr: {
      mess: "Votre Désordre,",
      mission: "Notre Mission",
      quote: "Devis gratuit",
    },
  };

  return (
    <ParentContainer>
      <Banner>
        <QuoteDiv>
          <H1>{quoteBox[language].mess}</H1>
          <H1>{quoteBox[language].mission}</H1>
          <Link to="/contact">
            <Button>{quoteBox[language].quote}</Button>
          </Link>
        </QuoteDiv>
      </Banner>
      <MiniServices />
      <About />
      <Footer />
    </ParentContainer>
  );
};

const Banner = styled.div`
  position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  height: 650px;
  width: 100%;

  @media (max-width: 600px) {
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
  }
`;

const ParentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const QuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 200px;

  @media (max-width: 970px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: 180px;
    top: 230px;
    color: white;
  }
`;

const H1 = styled.div`
  font-family: "DM Serif Display", serif;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Button = styled.button`
  font-size: 20px;
  margin-top: 20px;
  height: 60px;
  width: 100px;
  background-color: ${theme.primaryColor};
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: darken(${theme.primaryColor}, 10%);
  }

  @media (max-width: 600px) {
    position: relative;
    top: -10px;
    width: 170px;
    height: 40px;
  }
`;

export default Home;
