import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import styled from "styled-components"

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <Formwrapper onSubmit={handleSubmit} className='emFormwrapper'>
      Contact Us
<ParagraphDiv>
  Please feel free to send a message if you have any </ParagraphDiv><ParagraphDiv>questions or concerns or to receive a free quote.
</ParagraphDiv>
      <Input
        type="text"
        placeholder="Name"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        name="user_email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextAreaWrapper
        cols="30"
        rows="10"
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </TextAreaWrapper>
      <SendButton type="submit">Send Email</SendButton>
    </Formwrapper>
  )
}

export default EmailForm


const Formwrapper = styled.form`
display: flex;
flex-direction: column;
`

const ParagraphDiv = styled.div `
width: 340px;
display: flex;
align-items: flex-start;
`

const Input = styled.input `
border: none;
width: 340px;
height: 50px;
border-bottom: 2px solid #e6e6e6;
`

const TextAreaWrapper = styled.textarea`
border: none;
width: 340px;
height: 55px;
border-bottom: 2px solid #e6e6e6;
resize: none;
`

const SendButton = styled.button `
background-color: black;
color: white;
border: none;
text-align: center;
width: 340px;
height: 40px;
`