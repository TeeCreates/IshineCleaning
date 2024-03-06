import styled, {ThemeProvider} from "styled-components"
import {NavLink} from "react-router-dom"
import {theme} from "./styles/theme"
import { useState } from "react"
import { useLanguage } from "./LanguageContext"

export const MiniServices = () =>{
  const {language} = useLanguage()

    let LinkStyle = {
        color: theme.primaryColor,
        textDecoration: "none",
      };

const miniText = {

  en:{
    title1: 'Residential Services',
    title2: 'Commercial Services',
    title3: 'Specialty Services',
    readMore: "Read More"
  },
  fr:{
    title1: 'Services Résidentiels',
    title2: 'Services Commerciaux',
    title3: 'Services Spécialisés',
    readMore: "En savoir plus"
  }
}

const description = {
  en:{
      residential: {
          description: "Our residential cleaning services are designed to bring cleanliness and comfort to your home. Our dedicated team of professionals is committed to delivering a spotless and refreshed living environment for you and your family.",
              },
              commercial:{
                description:"Elevate the cleanliness and professionalism of your workplace with our commercial cleaning services. Our expert team is equipped to handle the unique demands of commercial spaces, from offices to retail stores and beyond. We understand that a clean and hygienic environment is essential for employee well-being and customer satisfaction.",   
      }, specialty:{
        description:"Our specialty cleaning services are tailored to meet your unique needs, going above and beyond to address specific challenges. Whether it's post-construction cleanup, carpet and upholstery restoration, or deep cleaning for special events, we have the expertise and equipment to handle it all."
      }
    }
,
  fr:{
      residential:{
      description: "Nos services de nettoyage résidentiel sont conçus pour apporter propreté et confort à votre maison. Notre équipe dévouée de professionnels s’engage à offrir un environnement de vie impeccable et rafraîchi pour vous et votre famille.",


      }, 
      commercial:{
        description:"Améliorez la propreté et le professionnalisme de votre lieu de travail grâce à nos services de nettoyage commercial. Notre équipe d'experts est équipée pour répondre aux demandes uniques des espaces commerciaux, des bureaux aux magasins de détail et au-delà. Nous comprenons qu'un environnement propre et hygiénique est essentiel au bien-être des employés et à la satisfaction des clients."
      },
      specialty:{
        description:"Nos services de nettoyage spécialisés sont adaptés pour répondre à vos besoins uniques, allant au-delà de vos attentes pour relever des défis spécifiques. Qu'il s'agisse d'un nettoyage après construction, de la restauration de tapis et de tissus d'ameublement ou d'un nettoyage en profondeur pour des événements spéciaux, nous avons l'expertise et l'équipement nécessaires pour tout gérer."
      }
  }

}


console.log(description[language],"test");
    return(
        <>     
        <Wrapper>
        <ServiceInfoDiv>
            <H2>

         {miniText[language].title1}
            </H2>

<P>

{description[language].residential.description}
</P>
<StyledNavLink to="/Services" exact   onClick={() => window.scrollTo(0, 0)} activeClassName="active" style={LinkStyle}>
              {miniText[language].readMore}
              </StyledNavLink>
</ServiceInfoDiv>
<ServiceInfoDiv>
<H2>       {miniText[language].title2} </H2>
    <P>
   {description[language].commercial.description}
    </P>
    <StyledNavLink to="/Services" exact   onClick={() => window.scrollTo(0, 0)} activeClassName="active" style={LinkStyle}>
    {miniText[language].readMore}
              </StyledNavLink>
</ServiceInfoDiv>
<ServiceInfoDiv>
<H2>   {miniText[language].title3} </H2>
<P>{description[language].specialty.description} </P>
<StyledNavLink to="/Services" exact   onClick={() => window.scrollTo(0, 0)} activeClassName="active" style={LinkStyle}>
{miniText[language].readMore}
              </StyledNavLink>
</ServiceInfoDiv>

        </Wrapper>
        </>
    )
}



const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding:20px;

@media (max-width: 700px) {
  display: flex;
flex-direction: column;
align-items: center;
}
`

const ServiceInfoDiv = styled.div`
width: 320px;
margin: 30px;
@media (max-width: 700px) {
  width: 70%;
}
`

const StyledNavLink = styled(NavLink)`

  color: ${props => props.theme.primaryColor}; /* Set the color to your desired text color */


  
  /* Add any other styles you want for your links */
  :hover{
      color:blue
      
  }
  
  &.active {
    /* Add styles for the active link if needed */
    font-weight: bold;
  }
`;


const H2 = styled.h2`
  font-family: 'DM Serif Display', serif;
 font-size: 40px;
 text-decoration-line: underline;
 text-decoration-color: ${theme.primaryColor};

`

const P = styled.p`
font-size: 17px;
margin-top: 10px;
margin-bottom: 10px;
`