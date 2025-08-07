import React from 'react';
import './Industry.css';

const sectors = [
  'Automotive',
  'Banking & Capital Markets',
  'Energy & Utilities',
  'Gaming',
  'Government & Public Sector',
  'Healthcare',
  'Insurance',
  'Life Sciences',
];

const Industry = () => {
  return (
    <div className='industry-container'>
      <h2 className='industry-title'>Industry-Specific Expertise</h2>
      <p className='industry-subtitle'>
        Your sector’s staffing needs, understood.
      </p>
      <div className='industry-grid'>
        {sectors.map((sector, index) => (
          <div key={index} className={`industry-card card-${index + 1}`}>
            <div className='industry-overlay'>
              <span className='industry-text'>{sector}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
