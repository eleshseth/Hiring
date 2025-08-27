import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className='career-page'>
      <div className='career-hero'>
        <div className='career-hero-content'>
          <h1>Join Our Team</h1>
          <p>
            Build your career with ALTISLINK and be part of our success story
          </p>
        </div>
      </div>

      <div className='career-section'>
        <div className='career-content'>
          <h2>Why Work With Us?</h2>
          <div className='career-benefits'>
            <div className='benefit-card'>
              <h3>Growth Opportunities</h3>
              <p>
                Advance your career with continuous learning and development
                programs
              </p>
            </div>
            <div className='benefit-card'>
              <h3>Competitive Benefits</h3>
              <p>
                Comprehensive healthcare, retirement plans, and performance
                bonuses
              </p>
            </div>
            <div className='benefit-card'>
              <h3>Work-Life Balance</h3>
              <p>
                Flexible working arrangements and supportive work environment
              </p>
            </div>
            <div className='benefit-card'>
              <h3>Innovation Culture</h3>
              <p>
                Be part of cutting-edge recruitment solutions and technologies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='career-openings'>
        <div className='career-content'>
          <h2>Current Openings</h2>
          <div className='job-listings'>
            <div className='job-card'>
              <h3>Senior Recruitment Consultant</h3>
              <p>Location: New York, NY</p>
              <p>Experience: 3-5 years in recruitment</p>
       
            </div>
            <div className='job-card'>
              <h3>IT Talent Specialist</h3>
              <p>Location: San Francisco, CA</p>
              <p>Experience: 2-4 years in IT recruitment</p>
         
            </div>
            <div className='job-card'>
              <h3>Business Development Manager</h3>
              <p>Location: Chicago, IL</p>
              <p>Experience: 5+ years in business development</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
