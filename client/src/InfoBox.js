import styled from "styled-components"
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
export const InfoBox = () =>{
const style = { color: "89CFF0"}
    return(
        <Wrapper>
        <div>
            Contact Us
            
        </div>     
        <EmailWrapper> <div> <FiMail style = { style}/> <Span>Email</Span> <Span>ishine.mtl@gmail.com </Span> </div></EmailWrapper>
        <NumberWrapper> <div> <FiPhone style ={style }/> <Span>Number</Span> <Span>5144341720 </Span></div>  </NumberWrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const EmailWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const NumberWrapper = styled.div`
display: flex;
align-items: center;
`
const Span = styled.span`
margin-right: 10px;
margin-left: 10px;
`