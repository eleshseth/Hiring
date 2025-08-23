import React from 'react';
import './Paragraph.css';

const Paragraph = ({ title, description }) => {
  return (
    <div className='work'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Paragraph;
