import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_mi55pbm';
    const templateId = 'template_bri12vr';
    const publicKey = 'TTp1nFNRyaDmeCUFt';

    const templateParams = {
      from_name: name,
      to_name: 'Altislink',
      message: message,
      reply_to: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    // e.preventDefault();
    // setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className='contact-form-container' id='contact-us'>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Fill out the form below and our team will
        get back to you soon.
      </p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type='submit'>Send Message</button>
        {/* {submitted && (
          <div className='contact-success'>Thank you for contacting us!</div>
        )} */}
      </form>
    </div>
  );
};

export default ContactForm;
