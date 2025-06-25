import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const [showBusinessServices, setShowBusinessServices] = useState(false);
  const [showBusinessSpecialties, setShowBusinessSpecialties] = useState(false);
  const [showBusinessIndustries, setShowBusinessIndustries] = useState(false);
  const [showBusinessOffices, setShowBusinessOffices] = useState(false);

  return (
    <div className='navbar'>
      <div
        className='logo'
        style={{ cursor: 'pointer' }}
        onClick={() => onNavClick && onNavClick('home')}>
        ALTISLINK
      </div>
      <div className='navlinks'>
        <div className='nav-item'>
          <div className='nav-title'>
            FOR BUSINESS <span className='down-arrow'>▼</span>
          </div>
          <div className='dropdown'>
            <div
              className='dropdown-item'
              onMouseEnter={() => setShowBusinessServices(true)}
              onMouseLeave={() => setShowBusinessServices(false)}
              style={{ position: 'relative' }}>
              Services
              {showBusinessServices && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() => setShowBusinessServices(true)}
                  onMouseLeave={() => setShowBusinessServices(false)}>
                  <div className='dropdown-subitem'>Contract Staffing</div>
                  <div className='dropdown-subitem'>Direct Hire</div>
                  <div className='dropdown-subitem'>Staff Augmentation</div>
                  <div className='dropdown-subitem'>Managed Services</div>
                </div>
              )}
            </div>
            <div
              className='dropdown-item'
              onMouseEnter={() => setShowBusinessSpecialties(true)}
              onMouseLeave={() => setShowBusinessSpecialties(false)}
              style={{ position: 'relative' }}>
              Specialties
              {showBusinessSpecialties && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() => setShowBusinessSpecialties(true)}
                  onMouseLeave={() => setShowBusinessSpecialties(false)}>
                  <div className='dropdown-subitem'>Cloud & DevOps</div>
                  <div className='dropdown-subitem'>Cybersecurity</div>
                  <div className='dropdown-subitem'>Data Science</div>
                  <div className='dropdown-subitem'>Project Management</div>
                </div>
              )}
            </div>
            <div
              className='dropdown-item'
              onMouseEnter={() => setShowBusinessIndustries(true)}
              onMouseLeave={() => setShowBusinessIndustries(false)}
              style={{ position: 'relative' }}>
              Industries
              {showBusinessIndustries && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() => setShowBusinessIndustries(true)}
                  onMouseLeave={() => setShowBusinessIndustries(false)}>
                  <div className='dropdown-subitem'>Banking</div>
                  <div className='dropdown-subitem'>Healthcare</div>
                  <div className='dropdown-subitem'>Retail</div>
                  <div className='dropdown-subitem'>Telecom</div>
                </div>
              )}
            </div>
            <div
              className='dropdown-item'
              onMouseEnter={() => setShowBusinessOffices(true)}
              onMouseLeave={() => setShowBusinessOffices(false)}
              style={{ position: 'relative' }}>
              Office Locations
              {showBusinessOffices && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() => setShowBusinessOffices(true)}
                  onMouseLeave={() => setShowBusinessOffices(false)}>
                  <div className='dropdown-subitem'>New York</div>
                  <div className='dropdown-subitem'>Toronto</div>
                  <div className='dropdown-subitem'>London</div>
                  <div className='dropdown-subitem'>Bangalore</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>
            FOR JOBSEEKERS <span className='down-arrow'>▼</span>
          </div>
          <div className='dropdown'>
            <div className='dropdown-item'>Job Search</div>
            <div className='dropdown-item'>Find a job at Procom</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>
            INSIGHTS <span className='down-arrow'>▼</span>
          </div>
          <div className='dropdown'>
            <div className='dropdown-item'>Industry Trends</div>
            <div className='dropdown-item'>Market Research</div>
            <div className='dropdown-item'>Case Studies</div>
            <div className='dropdown-item'>Whitepapers</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>
            ABOUT <span className='down-arrow'>▼</span>
          </div>
          <div className='dropdown'>
            <div className='dropdown-item'>Our Story</div>
            <div className='dropdown-item'>Leadership Team</div>
            <div className='dropdown-item'>Company Values</div>
            <div className='dropdown-item'>Testimonials</div>
          </div>
        </div>
        <div className='nav-item'>
          <div className='nav-title'>
            CONTACTS <span className='down-arrow'>▼</span>
          </div>
          <div className='dropdown'>
            <div
              className='dropdown-item'
              onClick={() => onNavClick && onNavClick('contact')}
              style={{ cursor: 'pointer' }}>
              Get in Touch
            </div>
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
