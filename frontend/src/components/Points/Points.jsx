import React from 'react';
import './Points.css';

const Points = ({ points }) => {
  return (
    <div className='points-container'>
      <ul className='points-list'>
        {points.map((point, index) => (
          <li key={index} className='points-item'>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
