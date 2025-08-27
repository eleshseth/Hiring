import React from 'react';
import './Technology.css';

const techItems = [
  { label: 'Big Data', icon: '🗄️' },
  { label: 'Cybersecurity', icon: '💻' },
  { label: 'DevOps & Cloud', icon: '☁️' },
  { label: 'Java Developers', icon: '🟨' },
  { label: 'Project Managers', icon: '📋' },
  { label: 'Salesforce', icon: '☁️' },
  { label: 'SAP', icon: '📦' },
  { label: 'ServiceNow', icon: '🔘' },
];

const Technology = () => {
  return (
    <div className='technology-section'>
      <div className='tech-left'>
        <h2>
          Technology
          <br />
          Specializations
        </h2>
        <p>Staffing experts in vital  domains.</p>
      </div>
      <div className='tech-grid'>
        {techItems.map((item, index) => (
          <div className='tech-card' key={index}>
            <div className='tech-icon'>{item.icon}</div>
            <div className='tech-label'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
