import cartoonTeam from "../src/Assets/cartoonTeam.png"
import styled from "styled-components"
import Footer from "./Footer"
import EmailForm  from "./Emailform";
import theme from "./styles/theme"
import { InfoBox } from "./InfoBox";
// import EmailRestApi from "./EmailRestApi"
export const Contact = () => {
    return (
      <>
     <Wrapper>
     <BannerDiv>
<BannerText>Get A Free Quote!
    </BannerText>
    </BannerDiv>
    <ContentWrapper>
    <InfoBox/>
       <EmailForm/>

            </ContentWrapper>

     </Wrapper>
     <Footer/>
     </>
    );
  };

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
  `

const Text = styled.p`
font-family: 'DM Serif Display', serif;
font-size: 70px;
`


const BannerDiv = styled.div`
background-color: #89cff0;
background-image: linear-gradient(135deg, #89cff0 0%, #babcda 100%);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-size: cover;
position: absolute;

top:40px;
height: 200px;

`

const BannerText = styled.p`
color: white;
font-size:70px;

`

const ContentWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
justify-content: space-evenly;
`