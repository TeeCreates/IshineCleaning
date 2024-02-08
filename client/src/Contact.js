import cartoonTeam from "../src/Assets/cartoonTeam.png"
import styled from "styled-components"
import Footer from "./Footer"
export const Contact = () => {
    return (
      <>
     <Wrapper>
                  <div>
             <Text>Get a Quote!</Text>
             <p>We're here to help! Give us a call at (514) 999-9999 to get a free quote </p> <p> Our friendly staff is here to assist you</p>
         </div>
         <PhotoWrapper>
             <img src={cartoonTeam} alt="" />
         </PhotoWrapper>


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

const PhotoWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
