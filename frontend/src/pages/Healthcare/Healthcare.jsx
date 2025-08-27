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
const points = [
  'Production',
  'Machine Operators',
  'Forklift Operators',
  'Packers',
  'Assemblers',
  'Shipping And Receiving Associates',
  'And More…',
];
const Healthcare = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Telecommunications'
        paragraph='Connecting Telecommunications with top talent and technology to power global communication and innovation.
'
      />
      <Paragraph
        title={'TELECOMMUNICATIONS'}
        description={[
          'Telecom companies have opportunities to provide clients with content via television, internet, and telephony, through cable and wireless services.',
          'There is significant market pressure to expand while innovating new and economical technology that provides new features, increased reliability, and value-added applications.',
          'To achieve this, telecom companies must build additional network capacity to handle increased traffic and deploy the latest technology quickly and cost-effectively.',
          'Our specialized recruiters, who come from the industry, have deep domain expertise and help companies acquire and manage the talent they need to adapt in a changing industry, meet everyday challenges, and capitalize on new opportunities.',
          'We successfully recruit for all sectors of the telecom marketplace, including Carrier, Systems Integration, Mobile, Call Center, Internet Services, and Networking.',
          'AltisLink offers Telecom clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:',
        ]}
      />
      <Points title='Production Roles' points={points} />
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Healthcare;
