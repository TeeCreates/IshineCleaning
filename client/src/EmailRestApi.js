import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

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

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          to_name: 'Ishine',
          message: message,
        }
      };
// Send the email using EmailJS
try {
    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    console.log(res.data);
    setName('');
    setEmail('');
    setMessage('');
  } catch (error) {
    console.error(error);
  }
}

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type="submit">Send Email</button>
    </form>
  )
}

export default EmailForm