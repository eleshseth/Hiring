import React from 'react';
import './HelpYou.css';
import { assets } from '../../assets/assets';

const HelpYou = () => {
  return (
    <div className='help-container'>
      <h2 className='help-title'>How we can help you find  talent</h2>
      <div className='help-content'>
        <div className='help-image-wrapper'>
          <img
            src={assets.helpyou}
            alt='Smiling woman at laptop'
            className='help-image'
          />
        </div>
        <div className='help-info'>
          <ul className='help-list'>
            <li>RightFit™ Recruitment Process</li>
            <hr className='hr' />
            <li>Market rate intelligence</li>
            <hr className='hr' />
            <li>Dedicated client portal</li>
            <hr className='hr' />
            <li>A proven track record</li>
            <hr className='hr' />
            <li>Locations served</li>
            <hr className='hr' />
          </ul>
          <button className='help-button'>REQUEST MORE INFORMATION</button>
        </div>
      </div>
    </div>
  );
};

export default HelpYou;
