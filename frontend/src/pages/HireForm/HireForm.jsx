import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HireForm.css'; // Create this CSS file for custom styles if needed

const HireForm = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Send form data to backend here
  };

  return (
    <div className='hire-form-page'>
      <div className='hire-form-banner'>
        <h1>Find Your Next IT Talent</h1>
        <p>Connect with top tech professionals and build your dream team</p>
      </div>
      <div className='hire-form-container'>
        <h2>Start Hiring Top Tech Talent</h2>
        <p>
          Fill out the form below and our recruitment experts will contact you
          shortly
        </p>
        <form className='hire-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='company'
            placeholder='Company Name'
            value={form.company}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='jobTitle'
            placeholder='Job Title'
            value={form.jobTitle}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Work Email'
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={form.country}
            onChange={handleChange}
            required
          />
          <button type='submit' style={{ color: '#fff', marginTop: 12 }}>
            Submit
          </button>
          {submitted && (
            <div
              className='hire-success'
              style={{ color: 'green', marginTop: 12 }}>
              Thank you for your request! Our team will contact you soon.
            </div>
          )}
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <h3>Looking for a job?</h3>
        <Link to='/jobs'>
          <button
            style={{
              background: '#847448',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: 4,
              border: 'none',
              fontSize: 16,
              cursor: 'pointer',
              marginBottom: 24,
            }}>
            Search Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HireForm;

// In your navbar component, add:
// <NavLink to="/hire">For Employers</NavLink>
// <NavLink to="/jobs">For Jobseekers</NavLink>
