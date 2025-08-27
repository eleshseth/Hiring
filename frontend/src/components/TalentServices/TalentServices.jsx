import React from 'react';
import './TalentServices.css';
import { assets } from '../../assets/assets';

const TalentServices = () => (
  <div className='our-talent-services'>
    <h1>Our talent services</h1>
    <p>
      The acceleration of automation, globalisation and changing workforce
      demographics are increasing the demand for skills that bring together
      technology, people and industry knowledge. We'll quickly help you access
       talent through the following services:
    </p>
    <div className='images'>
      <div className='service-item'>
        <img src={assets.professional} alt='Contract Staffing' />
        <h3>Contract Staffing</h3>
      </div>
      <div className='service-item'>
        <img src={assets.banking} alt='Direct Hire' />
        <h3>Direct Hire</h3>
      </div>
      <div className='service-item'>
        <img src={assets.government} alt='Global Talent' />
        <h3>Global Talent</h3>
      </div>
    </div>
  </div>
);

export default TalentServices;
