import womenfoldingarm from "./Assets/womenfoldingarm.png"
import styled from "styled-components"
import {theme} from "./styles/theme"
import group from "./Assets/group.png"
import { useLanguage} from "./LanguageContext"

export const About =()=>{

const {language} = useLanguage()

const aboutText = {
  en:{
    headtitle:"About Us",
    text1:"At I Shine, our story begins in a close-knit community neighborhood just like yours. A group of dedicated mothers living in the same locality decided to make the most of their time, skills, and passion for cleanliness. What started as small, neighborly acts of helping one another with household tasks and tidying up soon evolved into something more significant.",
    text2: "Our journey from a group of mothers helping one another to a professional cleaning company has been marked by unwavering commitment, continuous learning, and a deep-rooted belief in the importance of a clean and healthy environment. Today, we proudly serve not only our community but also businesses, organizations, and households throughout I Shine"

  },
  fr:{
    headtitle:"À Propos de Nous",
text1:"Chez I Shine, notre histoire commence dans un quartier communautaire très uni comme le vôtre. Un groupe de mères dévouées vivant dans la même localité ont décidé de tirer le meilleur parti de leur temps, de leurs compétences et de leur passion pour la propreté. Ce qui a commencé comme de petits actes de bon voisinage consistant à s’entraider pour les tâches ménagères et le rangement s’est rapidement transformé en quelque chose de plus significatif.",
text2:"Notre parcours, d'un groupe de mères s'entraidant à une entreprise de nettoyage professionnelle, a été marqué par un engagement sans faille, un apprentissage continu et une croyance profondément enracinée dans l'importance d'un environnement propre et sain. Aujourd'hui, nous sommes fiers de servir non seulement notre communauté, mais également les entreprises, les organisations et les ménages de I Shine."
  }
}
console.log(aboutText, "testing")
  // console.log(aboutText[language].title, "about")
    return (

        <Section>

        <Image src={womenfoldingarm}/>
<AboutUsDiv>
    <H2>{aboutText[language].headtitle}</H2>

    <Paragraph>{aboutText[language].text1}</Paragraph>

<Paragraph>{aboutText[language].text2}</Paragraph>

  
</AboutUsDiv>
    
        </Section>

    )
}


const Image = styled.img`

height: 40%;
width: 40%;


@media (max-width: 970px) {
height: 100%;
width: 100%;

}
`

const Section = styled.div`
margin-top: 80px;
display: flex;
flex-direction: row;

@media (max-width: 970px) {
  display: flex;
flex-direction: column;
align-items: center;

}
/* padding-bottom: 3px; */

/* background-color: #5ca0f2;
background-image: linear-gradient(315deg, #5ca0f2 0%, #f5f7f6 74%); */

`

const AboutUsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
background-color: white;
padding: 80px;
width: 60%;
`
const H2 = styled.h2`
  font-family: 'DM Serif Display', serif;
 font-size: 40px;
 text-decoration-line: underline;
 text-decoration-color: ${theme.primaryColor};
 @media (max-width: 970px) {
width: 300px;

}
`

const Paragraph = styled.p`
margin: 20px;
font-size: 18px;
width: 70%;

@media (max-width: 970px) {
width: 300px;

}
`
