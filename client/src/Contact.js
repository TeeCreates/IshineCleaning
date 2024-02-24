import styled, { keyframes } from "styled-components";
import Footer from "./Footer";
import EmailForm from "./Emailform";
import message from "./Assets/message.jpg";
import { useLanguage } from './LanguageContext'; // Import useLanguage hook

export const Contact = () => {
  const { language } = useLanguage(); // Get the current language from the useLanguage hook

  // Define the text content based on the current language
  const bannerText = language === 'en' ? 'Get A Free Quote!' : 'Obtenez un Devis Gratuit!';
  
  return (
    <>
      <Wrapper>
        <BannerDiv>
          <BannerText>{bannerText}</BannerText>
        </BannerDiv>
        <ContentWrapper>
          <Image src={message} alt="" />
          <EmailForm />
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Adjust the initial position as needed */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const delay = 0.2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const BannerDiv = styled.div`
  background-color: #89cff0;
  background-image: linear-gradient(135deg, #89cff0 0%, #babcda 100%);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: absolute;
  top: 40px;
  height: 200px;
 
`;

const BannerText = styled.p`
  color: white;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;

  /* Animation only for phone view */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      /* Apply animation to each child element separately */
      opacity: 0;
      transform: translateY(20px);
      animation: ${fadeIn} 0.8s ease-in-out forwards;

      &:first-child {
        /* Delay the animation for the first child (image) */
        animation-delay: 0.4s;
      }

      &:nth-child(2) {
        /* Delay the animation for the second child (form) */
        animation-delay: 0.8s;
      }
    }
  }
`;


const Image = styled.img`
  height: 500px;

  /* Apply animation only for mobile view */
  @media (max-width: 768px) {
    animation: ${fadeIn} 0.8s ease-in-out forwards;
    animation-delay: ${delay * 1}s;
    height: 225px;
    margin-top: 50px;
  }
`;

