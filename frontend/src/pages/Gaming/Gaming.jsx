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

const aerospacePoints = [
  'Aerospace Engineer',
  'Mechanical Engineer',
  'Software Engineer',
  'Manufacturing Technician',
  'Environmental Advisor',
  'Market Research Analyst',
  'Learning & Development Manager',
  'Supply Chain Manager',
  'Data Scientist',
  'Test Engineer',
  'Quality Control',
  'Safety Engineer',
  'Occupational Health Advisor',
  'Production Engineer',
  'Cybersecurity Specialist',
  'Logistician',
  'Research Analyst',
  'Legal Counsel',
  'Compliance Officer',
];

const Gaming = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Aerospace & Defense'
        paragraph='Elevating Aerospace & Defense through precision talent and advanced engineering solutions.
'
      />
      <Paragraph
        title={'Aerospace & Defense'}
        description={[
          'The aerospace & defense industry faces ongoing global challenges and a growing demand for new technology, innovation, and improved performance.',
          'At the same time, financial constraints from budget cuts have mandated cost controls and reductions. For success, aerospace and defense companies need to continue to evaluate operations and find ways to innovate and implement new technologies to drive down costs.',
          'We help aerospace and defense companies acquire and manage the talent they need to meet the challenges of a changing industry and gain a competitive advantage. Our aerospace & defense team works solely within this sector, with our consultants having specialist knowledge and a wealth of expertise.',
          'We serve clients by providing professional, technical, and administrative talent on a temporary, permanent, and contract basis.',
          'AltisLink offers Aerospace & Defense clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:',
        ]}
      />
      <Points title='Available Roles' points={aerospacePoints} />

      <Experience />
      <Service/>
      <Partner />
      <Engagements />
    </div>
  );
};

export default Gaming;
