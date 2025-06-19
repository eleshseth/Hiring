import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>ALTISLINK</div>
      <div className='navlinks'>
        <div className='nav-item'>
          <div className='nav-title'>FOR BUSINESS <span className='down-arrow'>▼</span></div>
          <div className='dropdown'>
            <div className='dropdown-item'>Staffing Solutions</div>
            <div className='dropdown-item'>Talent Acquisition</div>
            <div className='dropdown-item'>Workforce Management</div>
            <div className='dropdown-item'>Consulting Services</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>FOR JOBSEEKERS <span className='down-arrow'>▼</span></div>
          <div className='dropdown'>
            <div className='dropdown-item'>Job Search</div>
            <div className='dropdown-item'>Career Resources</div>
            <div className='dropdown-item'>Resume Building</div>
            <div className='dropdown-item'>Interview Preparation</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>INSIGHTS <span className='down-arrow'>▼</span></div>
          <div className='dropdown'>
            <div className='dropdown-item'>Industry Trends</div>
            <div className='dropdown-item'>Market Research</div>
            <div className='dropdown-item'>Case Studies</div>
            <div className='dropdown-item'>Whitepapers</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>ABOUT <span className='down-arrow'>▼</span></div>
          <div className='dropdown'>
            <div className='dropdown-item'>Our Story</div>
            <div className='dropdown-item'>Leadership Team</div>
            <div className='dropdown-item'>Company Values</div>
            <div className='dropdown-item'>Testimonials</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>CONTACTS <span className='down-arrow'>▼</span></div>
          <div className='dropdown'>
            <div className='dropdown-item'>Get in Touch</div>
            <div className='dropdown-item'>Office Locations</div>
            <div className='dropdown-item'>Support Team</div>
            <div className='dropdown-item'>Feedback</div>
          </div>
        </div>
      </div>
      <div className='profile'>
        <button className='signupbutton'>signup</button>
      </div>
    </div>
  );
};

export default Navbar;