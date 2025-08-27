import React from 'react';
import { assets } from '../../assets/assets';
import './Service.css';

const Service = () => {
  return (
    <div className='service-component'>
      <img src={assets.service} alt='Our Services' className='service-image' />
    </div>
  );
};

export default Service;
