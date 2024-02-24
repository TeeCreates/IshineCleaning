
import styled from "styled-components"
import banner from "./Assets/banner.jpg"
import theme from "./styles/theme"
import { MiniServices } from "./MiniServices";
import {About} from "./About"
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import {Link} from "react-router-dom"
 const Home = ( ) =>{
  const {language, setLanguage} = useLanguage()
const quoteBox = {
  en:{
    title:"Your Mess, Our Mission",
    quote:"Free Quote",
  }
,
fr:{
  title:"Votre désordre, notre mission",
  quote:"Devis gratuit",
}
,
}

  
    return (

        <ParentContainer>
        <Banner>
<QuoteDiv>
            <H1> {quoteBox[language].title}</H1>
            <Link to="/contact">
     
            <Button> {quoteBox[language].quote}</Button>
            </Link>
            </QuoteDiv>

        </Banner>
<MiniServices/>
<About/>
        <Footer/>
      </ParentContainer>
    )
}
export default Home

const Banner = styled.div`
position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 650px;
  width: 100%;

 @media (max-width: 768px) { 
  background-size: contain;
  background-repeat: no-repeat;
  top: -10px;
  background-position: center top; 
    height: 500px ;
    width: 100vw;
 }/* Remove the maximum height constraint */
  
  /* Add any additional styles as needed */
`;

const ParentContainer = styled.div`
  /* Set the dimensions for the parent container */
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
   background-color: rgba(0, 0, 0, 0.500);
   width: 500px;
   height: 200px;


   @media (max-width: 970px) {
  display: flex;
flex-direction: column;
align-items: center;
width: 260px;
   height: 180px;

}

`

const H1 = styled.div`
 font-family: 'DM Serif Display', serif;
  font-size: 40px;
`

const Button = styled.button`
font-size: 20px;
margin-top: 20px;
height: 60px;
width: 100px;
background-color: ${theme.primaryColor} ;
border: none;
color: white;
cursor: pointer;
&:hover {
    transform: scale(1.05);
    background-color: darken(${theme.primaryColor}, 10%); /* Darken the color on hover */
  }
`