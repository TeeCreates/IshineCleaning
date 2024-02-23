import styled from "styled-components"
import { FiMail } from "react-icons/fi";
export const InfoBox = () =>{

    return(
        <Wrapper>
        <div>
            Contact Us
            
        </div>     
        <EmailWrapper>  <FiMail/> <span>Email</span> <span>ishine.mtl@gmail.com </span> </EmailWrapper>
        <NumberWrapper>  <FiMail/> <span>Number</span> <span>5144341720 </span> </NumberWrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const EmailWrapper = styled.div`
display: flex;
align-items: center;
`
const NumberWrapper = styled.div`
display: flex;
align-items: center;
`