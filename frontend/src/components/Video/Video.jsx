import React from 'react';
import './Video.css';

const Video = ({ videoSrc, heading, paragraph }) => (
  <div className='video-container'>
    <video
      className='video-bg'
      src={videoSrc}
      autoPlay
      loop
      muted
    />
    <div className='video-title'>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  </div>
);

export default Video;
