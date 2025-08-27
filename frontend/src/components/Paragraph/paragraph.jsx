import React from 'react';
import './Paragraph.css';

const Paragraph = ({ title, description }) => {
  return (
    <div className='work'>
      <div>
        <h2>{title}</h2>

        {Array.isArray(description) ? (
          <ul className='bullet-points'>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Paragraph;
