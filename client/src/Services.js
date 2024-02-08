import bucket from "./Assets/bucket.png"
import special from "./Assets/special.png"
import commercial from "./Assets/commercial.png"
import styled, {keyframes} from "styled-components"
import theme from "./styles/theme"
import Footer from "./Footer"
import {useLanguage} from "./LanguageContext"
import waves from "./Assets/bluewaves.jpg"

export const Services =()=>{

    const { language } = useLanguage();



    const serviceContent = {
    en: {
        title1: 'Residential Services',
        title2: 'Commercial Services',
        title3: 'Specialty Services',

      },
      fr: {
        title1: 'Services Résidentiels',
        title2: 'Services Commerciaux',
        title3: 'Services Spécialisés',


}
}

const description = {
    en:{
        residential: {
            title1:"Residential Services",
            description: "Residential cleaning services typically offer a range of cleaning tasks to ensure that a home is clean, tidy, and comfortable for its occupants. The specific services offered can vary from one cleaning company to another, but here are some common types of services you can expect from a residential cleaning service:",
            list:["Regular Cleaning", "Deep Cleaning", "Move-In/Move-out", "Specialized Cleaning","Green Cleaning","Customized Cleanings","One-Time Cleaning"]
                }
        }
,
    fr:{
        residential:{
        description: "Les services de nettoyage résidentiel proposent généralement une gamme de tâches de nettoyage pour garantir qu'une maison est propre, bien rangée et confortable pour ses occupants. Les services spécifiques proposés peuvent varier d'une entreprise de nettoyage à l'autre, mais voici quelques types de services courants que vous pouvez attendre d'un service de nettoyage résidentiel:",
        list : ["Nettoyage régulier", "Nettoyage en profondeur", "Emménagement/Déménagement", "Nettoyage spécialisé", "Nettoyage écologique", "Nettoyages personnalisés", "Nettoyage unique"]

        }
    }
}
    return (
        <div>
        <BannerDiv>
<BannerText>Our Services
    </BannerText>
</BannerDiv>
        <Wrapper>

<HoverWrapper>
<Section>

    <Image src={bucket} alt="" />
    <TextWrapper>
    <H1>{serviceContent[`${language}`].title1}</H1>
    <InfoWrapper>




    <P>{description[`${language}`].residential.description}</P>
<div>
    <Ul>
        {description[`${language}`].residential.list.map((item, index)=>(

<ListItem key={index}>{item}</ListItem>
        ))}
    </Ul>
</div>
    </InfoWrapper>
    </TextWrapper>
  

   </Section>
   </HoverWrapper>
   <HoverWrapper>
   <Section>

   <Image src={commercial} alt="" />
   <TextWrapper>
   <H1>{serviceContent[`${language}`].title2}</H1>
   <InfoWrapper>


   <P>
   Commercial cleaning services offer a wide range of services tailored to the cleaning and maintenance needs of businesses, organizations, and commercial properties. These services are designed to maintain a clean, healthy, and professional working environment. 
   </P>
<div>
    <Ul>
        <ListItem>Office Cleaning</ListItem>
        <ListItem>Customized Cleaning Plans</ListItem>
        <ListItem>Commercial Floor Cleaning</ListItem>
        <ListItem>Window Cleaning</ListItem>
        <ListItem>Janitorial Services</ListItem>
        <ListItem>Post-Contructions Cleaning</ListItem>
        <ListItem>Emergency Cleanup</ListItem>
    </Ul>
</div>

   </InfoWrapper>
   </TextWrapper>

</Section>
</HoverWrapper>
<HoverWrapper>
<Section>
<Image src={special} alt="" />
<TextWrapper>
<H1>{serviceContent[`${language}`].title3}</H1>
<InfoWrapper>


  

<P>
Specialty cleaning services in the cleaning industry refer to specialized and often more complex cleaning tasks that go beyond regular or standard cleaning services. These services require specific expertise, equipment, and techniques to address unique and challenging cleaning situations. 
</P>
<div>
    <Ul>
        <ListItem> Restaurant and Kitchen Cleaning  </ListItem>
        <ListItem> Industrial Cleaning </ListItem>
    <ListItem>Data Center Cleaning</ListItem>
    </Ul>
</div>
</InfoWrapper>
</TextWrapper>
</Section>
</HoverWrapper>
        </Wrapper>
<Footer/>
        </div>
    )
}


const Image = styled.img`
height: 400px;
border-radius: 10px;

`
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

const HoverWrapper = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(20px); /* Adjust the initial position as needed */
  animation: ${fadeIn} 0.8s ease-in-out forwards; /* Adjust the duration as needed */
  
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    transform: scale(1.005);
    z-index: -1;
  }

  &:nth-child(1) {
    animation-delay: ${delay * 1}s;
  }

  &:nth-child(2) {
    animation-delay: ${delay * 2}s;
  }

  &:nth-child(3) {
    animation-delay: ${delay * 3}s;
  }
`;

const Section = styled.div`
width: 95vw;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left:50px;
padding-right: 50px;
margin-left: 20px;
/* margin-right: 20px;
background-color: white; */
padding: 10px;
margin-top: 10px;
border-radius: 20px;
align-items: center;
/* border: 2px black solid; */
-webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2); 
box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);

/* -webkit-box-shadow: 0px 0px 13px 3px rgba(191,227,255,0.95); 
box-shadow: 0px 0px 13px 3px rgba(191,227,255,0.95); */
${HoverWrapper}:hover & {
    transform: scale(1.005);
  }

  
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
padding: 30px;
@media (max-width: 768px) {
display: flex;
flex-direction: column;
    }

`

const H1 = styled.h1`
font-family: 'DM Serif Display', serif;
font-size: 37px;
margin-top: 10px;
text-decoration: underline;
text-decoration-color: ${theme.primaryColor};
margin-left: 20px;
`

const InfoWrapper = styled.div`

padding-left: 20px;
padding-right: 20px;

`


const P = styled.p`
font-size: 17px;
`

const Ul = styled.ul`
height: 280px;
display: flex;
flex-direction: column;
`

const ListItem = styled.li`
list-style-type: circle;
margin: 10px;
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 30px;
justify-content: flex-start;

`

const BannerDiv = styled.div`
background-color: ${theme.primaryColor} ;
background-color: #89cff0;
background-image: linear-gradient(135deg, #89cff0 0%, #babcda 100%);

width: 100vw;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
/* background: url(${waves}); */
background-size: cover;

`

const BannerText = styled.p`
color:white;
font-size:70px;

`

// const PageDiv = styled.div`
 
//         background: rgba(0,0,0,.3);
//         position: fixed;
//         z-Index: 1;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         opacity: !isOpen ? "0" : "1",
//         transition: "all .2s",
//         visibility: !isOpen ? "hidden" : "visible",

// `