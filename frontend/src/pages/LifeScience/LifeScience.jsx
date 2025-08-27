import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';
import Points from '../../components/Points/Points';
import Service from '../../components/Service/Service';

const pharmaPoints = [
  'HR/Legal Advisor',
  'Accountant/Finance Specialist',
  'Administrative/Clerical',
  'Medical Marketing Specialist',
  'Supply Chain, Procurement, And Logistics',
  'Research Scientist',
  'Patent Attorney',
  'Regulatory Affairs Specialist',
  'Pharmacy Technician',
  'Clinical Data Manager',
  'Chemist/Biochemist',
  'Clinical Research Assistant',
  'Nurse',
  'Privacy Officer',
  'Pharmacologist',
  'Compliance Officer',
  'Toxicologist',
  'Regulatory Affairs Specialist',
  'Information Technologist',
  'Clinical Data Analyst',
];

const LifeScience = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Pharmaceutical / Life Sciences – Clinical Recruitment'
        paragraph='Delivering specialized talent in Pharmaceutical and Life Sciences to drive clinical excellence and innovation.
'
      />
      <Paragraph
        title={'PHARMACEUTICAL / LIFE SCIENCES'}
        description={[
          'The Pharmaceutical and Life Sciences industries operate with significant operational and regulatory challenges, have the constant demand to release new and innovative products, and face increasing pressure to demonstrate profitability. At the same time, patent protection is eroding, consumers are seeking lower-cost alternatives, and competition is fierce.',
          'To succeed today, pharmaceutical and life sciences companies need to overcome industry challenges, create product differentiation, and drive sustainable growth. We help pharmaceutical and life sciences companies acquire and manage the talent they need to meet the challenges of a changing industry and gain a competitive advantage.',
          'Altislink offers Pharmaceutical and Life Sciences clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support evolving business needs.',
        ]}
      />
      <Points
        title='Pharmaceutical & Life Sciences Roles'
        points={pharmaPoints}
      />
      <Experience />
      <Service/>
      <Partner />
      <Engagements />
    </div>
  );
};

export default LifeScience;
