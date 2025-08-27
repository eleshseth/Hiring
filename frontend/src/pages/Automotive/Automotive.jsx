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
const manufacturingRoles = [
  'Industrial Engineer',
  'Bio/Chemical',
  'Civil/Structural',
  'Aerospace/Automotive',
  'Maintenance Technician',
  'Supply Chain Specialist',
  'Mechanical Engineer',
  'Software Engineer',
  'Manufacturing Technician',
  'Environmental Advisor',
  'Market Research Analyst',
  'Learning & Development Manager',
  'Assembly Line Workers',
  'Machine Operator',
  'Quality Control Inspector',
  'Production Supervisors',
  'Health And Safety Specialist',
  'Industrial Designer',
  'Automation Engineer',
];

// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];

const Automotive = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Manufacturing & Engineering'
        paragraph='Driving innovation and precision in Manufacturing & Engineering for a smarter, more efficient future.
'
      />
      <Paragraph
        title={'Manufacturing & Engineering'}
        description={[
          'Manufacturers today are constantly challenged by the market – from local to global – to deliver the right product to the right buyer at the right price and time. Regardless of the product, the marketplace is more demanding than ever, competition is intense, credit is tight, and sustainability is critical.',
          'To succeed in this environment, manufacturers must address evolving challenges, adapt to market changes, meet customer demands, and continuously improve quality while keeping costs under control.',
          'AltisLink Solutions helps manufacturers acquire and manage the talent they need to adapt in a rapidly changing industry, overcome everyday challenges, and gain a competitive advantage.',
          'AltisLink offers manufacturing clients an integrated approach – aligning talent strategy with business strategy – and delivering enterprise-wide talent on demand across diverse roles, including:',
        ]}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Manufacturing Roles</h2>
        <Points points={manufacturingRoles} />
      </div>

      <p></p>
      {/* <Slider images={sliderImages} /> */}
      <Experience />
      <Service/>
      <Partner />
      <Engagements />
    </div>
  );
};

export default Automotive;
