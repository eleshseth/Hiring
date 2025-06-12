import React from 'react';
import { assets } from '../../assets/assets';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='banner-container'>
        <img src={assets.banner} alt='banner' className='banner-image' />
        <div className='banner-text'>
          <h1>Empowering IT Excellence</h1>
          <h2>Connecting Tech Talent with Tomorrow’s Success Stories</h2>
          <button className='banner-button'>Get Started</button>
        </div>
      </div>
      <div className='experience'>
        <div className='experience-text'>45+ Years of Recruitment Experience</div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
