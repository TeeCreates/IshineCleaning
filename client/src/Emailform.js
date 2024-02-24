import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import theme from "./styles/theme";
import { useLanguage } from './LanguageContext'; // Import useLanguage hook

const EmailForm = () => {
  const { language } = useLanguage(); // Get the current language from the useLanguage hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_eq94kli';
    const templateId = 'template_rpo0dfs';
    const publicKey = 'Liwpbc5bG2Eu5Ki3T';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ishine',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true); // Set submitted state to true
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  // Render the thank you message if form is submitted
  if (submitted) {
    return <ThankYouMessage />;
  }

  // Define the text content based on the current language
  const placeholderName = language === 'en' ? ' Name' : ' Nom';
  const placeholderEmail = language === 'en' ? ' Email' : ' Courriel';
  const placeholderMessage = language === 'en' ? ' Message' : ' Message';
  const thankYouMessage = language === 'en' ? 'Thank you for your message!' : 'Merci pour votre message!';

  return (
    <Formwrapper onSubmit={handleSubmit} className='emFormwrapper'>
      <H1>{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</H1>
      <ParagraphDiv>
        {language === 'en' ? 'Please feel free to send a message if you have any questions or concerns or to receive a free quote.' : 'N\'hésitez pas à envoyer un message si vous avez des questions ou des préoccupations ou pour recevoir un devis gratuit.'}
      </ParagraphDiv>
      <InputDiv>
        <FiUser/>
        <Input
          type="text"
          placeholder={placeholderName}
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputDiv>
      <InputDiv>
        <FiMail/>
        <Input
          type="email"
          placeholder={placeholderEmail}
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputDiv>
      <InputDiv>
        <FiMessageSquare />
        <TextAreaWrapper
          cols="30"
          rows="10"
          placeholder={placeholderMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </InputDiv>
      <SendButton type="submit">{language === 'en' ? 'Send' : 'Envoyer'}</SendButton>
    </Formwrapper>
  );
};

const ThankYouMessage = () => {
  const { language } = useLanguage(); // Get the current language from the useLanguage hook
  const thankYouMessage = language === 'en' ? 'Thank you for your message!' : 'Merci pour votre message!';

  return (
    <ThankYouWrapper>
      <ThankYouText>{thankYouMessage}</ThankYouText>
      <NavLinkStyled to="/">{language === 'en' ? 'Click here' : 'Cliquez ici'}</NavLinkStyled>
    </ThankYouWrapper>
  );
};
const NavLinkStyled = styled(NavLink)`

  text-decoration: none;
  color: #89cff0;
`;
const Formwrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 414px) {
    margin-bottom: 70px;
  }
`;

const ParagraphDiv = styled.div `
  width: 380px;
  display: flex;
  align-items: flex-start;
`;

const Input = styled.input `
  border: none;
  width: 340px;
  height: 50px;
  border-radius: 10px;
  background-color: #EDF4FF;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  @media (max-width: 414px) {
    width: 250px;
  }
`;

const InputDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextAreaWrapper = styled.textarea`
  border: none;
  width: 340px;
  height: 100px;
  resize: none;
  border-radius: 10px;
  background-color: #EDF4FF;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  position: relative;
  @media (max-width: 414px) {
    width: 250px;
  }
`;

const SendButton = styled.button `
  background-color: black;
  color: white;
  border: none;
  text-align: center;
  width: 340px;
  height: 41px;
  position: relative;
  left: 11px;
  border-radius: 10px;
  cursor: pointer;
  /* Transition for smooth animation */
  transition: transform 0.2s;
  /* Styling for the button when it's clicked */
  &:active {
    transform: scale(0.95); /* Reduce the size by 5% */
  }
  @media (max-width: 414px) {
    width: 250px;
  }
`;

const H1 = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ThankYouWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust height as needed */
`;

const ThankYouText = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export default EmailForm;
