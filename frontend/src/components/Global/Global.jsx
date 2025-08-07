import React from 'react';
import './Global.css';
import { assets } from '../../assets/assets';


const Global = ({
 
  heading,
  subheading,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className='global-section'>
      <video className='global-background-video' autoPlay loop muted>
        <source src={assets.video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='global-content'>
        <h2>{heading || 'Locations across North America'}</h2>
        <p>{subheading || 'We have people where you need them.s'}</p>
        {buttonText && (
          <button className='global-cta' onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Global;
