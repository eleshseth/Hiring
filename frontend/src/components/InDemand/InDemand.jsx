import React from 'react';
import './InDemand.css';

const InDemand = ({
  roles = [
    'AI/Machine Learning',
    'Angular',
    'Big Data/Data Science/Analytics',
    'Cloud (AWS/Azure)',
    'Cybersecurity/Security',
    'DevOps (Azure, AWS)',
  ],
  image,
  imageAlt = 'IT Professional',
}) => (
  <div className='in-demand-roles-section'>
    <div className='in-demand-content'>
      <h2>The most in-demand roles:</h2>
      <ul className='roles-list'>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
    </div>
    <div className='in-demand-image'>
      {image && <img src={image} alt={imageAlt} />}
    </div>
  </div>
);

export default InDemand;
