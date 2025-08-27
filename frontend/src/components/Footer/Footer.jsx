import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = ({ onNavClick }) => (
  <footer className='footer'>
    <div className='footer-main'>
      <div className='footer-brand'>
        <img
          src={assets.logo}
          style={{ width: '300px' }}
          alt='ALTISLINK Logo'
          className='footer-logo'
        />
        <p className='footer-tagline'>
          Empowering Excellence. Connecting Talent with Tomorrow’s Success
          Stories.
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
              <a href='#' onClick={() => onNavClick && onNavClick('aboutus')}>
                About
              </a>
            </li>
            {/* <li>
              <a href='#'>Leadership</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li> */}
            {/* <li>
              <a href='#'>Testimonials</a>
            </li> */}
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <a href='#' onClick={() => onNavClick && onNavClick('itTalent')}>
                Executive Search
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => onNavClick && onNavClick('directhire')}>
                Permanent Hiring
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => onNavClick && onNavClick('globaltalent')}>
                Contingent Staffing
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => onNavClick && onNavClick('itconsultant')}>
                Contract to Hire
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => onNavClick && onNavClick('contactpayrole')}>
                Payroll Solutions
              </a>
            </li>
            <li>
              <a href='#' onClick={() => onNavClick && onNavClick('rpo')}>
                RPO
              </a>
            </li>
            <li>
              <a href='#' onClick={() => onNavClick && onNavClick('jobSearch')}>
                For jobseekers
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
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
        </div> */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href='#' onClick={() => onNavClick && onNavClick('contact')}>
                Get in Touch
              </a>
            </li>
            {/* <li>
              <a href='#'>Office Locations</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Feedback</a>
            </li> */}
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
          Stay updated with the latest hiring trends and insights.
        </p>
      </div>
    </div>
    <div className='footer-bottom'>
      <span>
        © {new Date().getFullYear()}© 2025 Altislink. All rights reserved
        @Powered by MarketMinds Digital Solutions
      </span>
      <span>
        <a href='#'>Privacy Policy</a> | <a href='#'>Terms of Service</a>
      </span>
    </div>
  </footer>
);

export default Footer;
