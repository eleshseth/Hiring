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

const corporateRolesPoints = [
  'Accounting/Finance',
  'HR/Legal',
  'Administrative/Clerical',
  'Marketing & Communications',
  'Information Technology',
  'Supply Chain, Procurement, And Logistics',
  'Research & Development',
  'Regulatory',
  'Insurance/Actuarial',
  'Credit Operations',
  'Lending Operations',
  'Project Management',
  'Risk Management',
  'Customer Service',
];



const Retail = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Finance Services Recruitment'
        paragraph='Connecting finance professionals with opportunities that drive growth, compliance, and innovation.
'
      />
      <Paragraph
        title={'FINANCE SERVICES'}
        description={
          'We offer Banking and Financial Services clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:'
        }
      />
      <Points
        title='Corporate & Business Services Roles'
        points={corporateRolesPoints}
      />
      ;
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Retail;
