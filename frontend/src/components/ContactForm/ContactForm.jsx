import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type='submit'>Send Message</button>
        {submitted && (
          <div className='contact-success'>Thank you for contacting us!</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
