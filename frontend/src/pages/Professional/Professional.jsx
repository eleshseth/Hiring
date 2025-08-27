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

const publicSectorPoints = [
  'Accounting, Tax & Treasury',
  'Government Administrator',
  'Social Work',
  'Law Enforcement',
  'Teaching',
  'Marketing And Communications',
  'Policy And Procedure',
  'Project Management',
  'Legal And Compliance',
  'Quality Assurance And Risk Management',
  'IT Specialist',
  'Human Resources',
  'Procurement & Supply Chain',
  'Executive Search Legal',
  'Property & Construction',
  'Consultancy, Strategy & Change',
  'Clinical Data Analyst',
];
const Professional = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Public Sector'
        paragraph='Supporting the Public Sector with dedicated talent and solutions to drive community impact and operational excellence.
'
      />
      <Paragraph
        title={'PUBLIC SECTOR'}
        description={[
          'We know that as an employer or candidate within the public sector, you require a recruitment partner with comprehensive knowledge of this specialist market. You need someone who understands public sector jobs and the geography you operate in. We are here to help you in every way to provide fast and cost-effective services.',
          'The government and public sector are under great demands and undergoing unprecedented change. Government agencies and public organizations are pressed to improve services to citizens, while at the same time taxpayers and interest groups push for budget control and reform.',
          'To successfully meet these challenges and deal with the conflicts, government and public sector organizations must transform the way they work to reduce costs and improve the delivery of services. We help organizations throughout the public sector acquire and manage the talent they need to more effectively meet the needs of the purpose and people they serve.',
        ]}
      />
      <Points
        title='Public Sector & Professional Services Roles'
        points={publicSectorPoints}
      />
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Professional;
