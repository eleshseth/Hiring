import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-main'>
      <div className='footer-brand'>
        <span className='footer-logo'>ALTISLINK</span>
        <p className='footer-tagline'>
          Empowering IT Excellence. Connecting Tech Talent with Tomorrow’s
          Success Stories.
        </p>
        <div className='footer-socials'>
          <a href='#' aria-label='LinkedIn' className='footer-social'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='#' aria-label='Twitter' className='footer-social'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' aria-label='Facebook' className='footer-social'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#' aria-label='Instagram' className='footer-social'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#' aria-label='YouTube' className='footer-social'>
            <i className='fab fa-youtube'></i>
          </a>
        </div>
      </div>
      <div className='footer-links'>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Leadership</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <a href='#'>Staffing Solutions</a>
            </li>
            <li>
              <a href='#'>Talent Acquisition</a>
            </li>
            <li>
              <a href='#'>Workforce Management</a>
            </li>
            <li>
              <a href='#'>Consulting</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href='#'>Insights</a>
            </li>
            <li>
              <a href='#'>Case Studies</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Help Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href='#'>Get in Touch</a>
            </li>
            <li>
              <a href='#'>Office Locations</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Feedback</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-newsletter'>
        <h4>Subscribe to our newsletter</h4>
        <form>
          <input type='email' placeholder='Your email address' />
          <button type='submit'>Subscribe</button>
        </form>
        <p className='footer-newsletter-text'>
          Stay updated with the latest IT hiring trends and insights.
        </p>
      </div>
    </div>
    <div className='footer-bottom'>
      <span>© {new Date().getFullYear()} ALTISLINK. All rights reserved.</span>
      <span>
        <a href='#'>Privacy Policy</a> | <a href='#'>Terms of Service</a>
      </span>
    </div>
  </footer>
);

export default Footer;
