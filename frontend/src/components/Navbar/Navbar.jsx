import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showBusinessServices, setShowBusinessServices] = useState(false);
  const [showBusinessSpecialties, setShowBusinessSpecialties] = useState(false);
  const [showBusinessIndustries, setShowBusinessIndustries] = useState(false);
  const [showBusinessOffices, setShowBusinessOffices] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveItem(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <div
        className='logo'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          onNavClick && onNavClick('home');
          setIsMenuOpen(false);
        }}>
        ALTISLINK
      </div>
      <button
        className='menu-button'
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
        <div className='nav-item'>
          <div
            className='nav-title'
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveItem(activeItem === 'business' ? null : 'business');
              }
            }}>
            FOR BUSINESS <span className='down-arrow'>▼</span>
          </div>
          <div
            className={`dropdown ${activeItem === 'business' ? 'active' : ''}`}>
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
                  <div
                    className='dropdown-subitem'
                    onClick={() => onNavClick && onNavClick('itTalent')}>
                    Contract Staffing
                  </div>
                  <div className='dropdown-subitem'>Direct Hire</div>
                  <div className='dropdown-subitem'>
                    {' '}
                    <div className='dropdown-subitem'>Global Talent</div>
                  </div>
                  <div className='dropdown-subitem'>IT Consulting</div>
                  <div className='dropdown-subitem'>Contractor Payrolling</div>
                  <div className='dropdown-subitem'>
                    {' '}
                    <div className='dropdown-subitem'>
                      Contractor Payrolling
                    </div>
                  </div>
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
          <div
            className='nav-title'
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveItem(
                  activeItem === 'jobseekers' ? null : 'jobseekers'
                );
              }
            }}>
            FOR JOBSEEKERS <span className='down-arrow'>▼</span>
          </div>
          <div
            className={`dropdown ${
              activeItem === 'jobseekers' ? 'active' : ''
            }`}>
            <div
              className='dropdown-item'
              onClick={() => onNavClick && onNavClick('jobSearch')}
              style={{ cursor: 'pointer' }}>
              Job Search
            </div>
            <div className='dropdown-item'>Find a job at Procom</div>
          </div>
        </div>
        <div className='nav-item'>
          <div
            className='nav-title'
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveItem(activeItem === 'insights' ? null : 'insights');
              }
            }}>
            INSIGHTS <span className='down-arrow'>▼</span>
          </div>
          <div
            className={`dropdown ${activeItem === 'insights' ? 'active' : ''}`}>
            <div className='dropdown-item'>Industry Trends</div>
            <div className='dropdown-item'>Market Research</div>
            <div className='dropdown-item'>Case Studies</div>
            <div className='dropdown-item'>Whitepapers</div>
          </div>
        </div>
        <div className='nav-item'>
          <div
            className='nav-title'
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveItem(activeItem === 'about' ? null : 'about');
              }
            }}>
            ABOUT <span className='down-arrow'>▼</span>
          </div>
          <div className={`dropdown ${activeItem === 'about' ? 'active' : ''}`}>
            <div className='dropdown-item'>Our Story</div>
            <div className='dropdown-item'>Leadership Team</div>
            <div className='dropdown-item'>Company Values</div>
            <div className='dropdown-item'>Testimonials</div>
          </div>
        </div>
        <div className='nav-item'>
          <div
            className='nav-title'
            onClick={() => {
              if (window.innerWidth <= 768) {
                setActiveItem(activeItem === 'contacts' ? null : 'contacts');
              }
            }}>
            CONTACTS <span className='down-arrow'>▼</span>
          </div>
          <div
            className={`dropdown ${activeItem === 'contacts' ? 'active' : ''}`}>
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
