import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showBusinessServices, setShowBusinessServices] = useState(false);
  const [showBusinessSpecialties, setShowBusinessSpecialties] = useState(false);
  const [showBusinessIndustries, setShowBusinessIndustries] = useState(false);
  const [showBusinessOffices, setShowBusinessOffices] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
        setActiveItem(null);
        // Reset all submenu states when switching to desktop
        setShowBusinessServices(true);
        setShowBusinessSpecialties(false);
        setShowBusinessIndustries(false);
        setShowBusinessOffices(false);
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
              onMouseEnter={() => !isMobile && setShowBusinessServices(true)}
              onMouseLeave={() => !isMobile && setShowBusinessServices(false)}
              onClick={() =>
                isMobile && setShowBusinessServices(!showBusinessServices)
              }
              style={{ position: 'relative' }}>
              Services
              {showBusinessServices && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() =>
                    !isMobile && setShowBusinessServices(true)
                  }
                  onMouseLeave={() =>
                    !isMobile && setShowBusinessServices(false)
                  }>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('itTalent');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                Executive Search
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('directhire');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
              Permanent Hiring
                  </div>

                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('globaltalent');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Contingent Staffing
                  </div>

                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('itconsultant');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
      Contract to Hire
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('contactpayrole');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                  Payroll Solutions
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('contactpayrole');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                  RPO
                  </div>
                  {/* <div className='dropdown-subitem'>
                    {' '}
                    <div className='dropdown-subitem'>
                      Contractor Payrolling
                    </div>
                  </div> */}
                </div>
              )}
            </div>
            {/* <div
              className='dropdown-item'
              onMouseEnter={() => !isMobile && setShowBusinessSpecialties(true)}
              onMouseLeave={() =>
                !isMobile && setShowBusinessSpecialties(false)
              }
              onClick={() =>
                isMobile && setShowBusinessSpecialties(!showBusinessSpecialties)
              }
              style={{ position: 'relative' }}>
              Specialties
              {showBusinessSpecialties && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() =>
                    !isMobile && setShowBusinessSpecialties(true)
                  }
                  onMouseLeave={() =>
                    !isMobile && setShowBusinessSpecialties(false)
                  }>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('bigdata');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Big Data
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('cybersecurity');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Cybersecurity
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('clouddevops');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Cloud & DevOps
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('dynamics360');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Dynamics 360
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('guidewire');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Guidewire
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('projectmanager');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Project Manager
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('sap');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    SAP
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('salesforce');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Salesforce
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('servicenow');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Service Now
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('banking');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Banking
                  </div>
                </div>
              )}
            </div> */}
            <div
              className='dropdown-item'
              onMouseEnter={() => !isMobile && setShowBusinessIndustries(true)}
              onMouseLeave={() => !isMobile && setShowBusinessIndustries(false)}
              onClick={() =>
                isMobile && setShowBusinessIndustries(!showBusinessIndustries)
              }
              style={{ position: 'relative' }}>
              Industries
              {showBusinessIndustries && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() =>
                    !isMobile && setShowBusinessIndustries(true)
                  }
                  onMouseLeave={() =>
                    !isMobile && setShowBusinessIndustries(false)
                  }>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('automotive');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                  Manufacturing & Engineering
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('banking');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                  Light Industrial
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('energy');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Technology Recruitment
                  </div>{' '}
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('gaming');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Aerospace & Defense
                  </div>{' '}
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('government');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Retail
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('healthcare');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Telecommunications
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('insurance');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Hospitality
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('lifescience');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                 Pharmaceutical / Life Sciences – Clinical Recruitment
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('professional');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Public Sector
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('retail');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                   Finance Services Recruitment
                  </div>
                  {/* <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('semiconductor');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Semiconductor
                  </div>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('telecom');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    Telecommunication
                  </div> */}
                </div>
              )}
            </div>
            <div
              className='dropdown-item'
              onMouseEnter={() => !isMobile && setShowBusinessOffices(true)}
              onMouseLeave={() => !isMobile && setShowBusinessOffices(false)}
              onClick={() =>
                isMobile && setShowBusinessOffices(!showBusinessOffices)
              }
              style={{ position: 'relative' }}>
              Office Locations
              {showBusinessOffices && (
                <div
                  className='dropdown-submenu'
                  onMouseEnter={() => !isMobile && setShowBusinessOffices(true)}
                  onMouseLeave={() =>
                    !isMobile && setShowBusinessOffices(false)
                  }>
                  <div
                    className='dropdown-subitem'
                    onClick={() => {
                      onNavClick && onNavClick('officelocation');
                      setIsMenuOpen(false); // Close the mobile menu
                    }}>
                    USA
                  </div>
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
              onClick={() => {
                onNavClick && onNavClick('jobSearch');
                setIsMenuOpen(false); // Close the mobile menu
              }}
              style={{ cursor: 'pointer' }}>
              Job Search
            </div>
            {/* <div className='dropdown-item'>Find a job at Procom</div> */}
          </div>
        </div>
        {/* <div className='nav-item'>
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
        </div> */}
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
            <div
              className='dropdown-item'
              onClick={() => {
                onNavClick && onNavClick('aboutus');
                setIsMenuOpen(false); // Close the mobile menu
              }}
              style={{ cursor: 'pointer' }}>
              Who we are
            </div>
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
              onClick={() => {
                onNavClick && onNavClick('contact');
                setIsMenuOpen(false); // Close the mobile menu
              }}
              style={{ cursor: 'pointer' }}>
              Get in Touch
            </div>
            {/* <div className='dropdown-item'>Office Locations</div>
            <div className='dropdown-item'>Support Team</div>
            <div className='dropdown-item'>Feedback</div> */}
          </div>
        </div>
      </div>
      <div className='profile'>
        <button
          className='signupbutton'
          onClick={() => onNavClick && onNavClick('contact')}>
          Get Hire
        </button>
      </div>
    </div>
  );
};

export default Navbar;
