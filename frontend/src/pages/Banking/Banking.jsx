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
// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];

const points = [
  'Machine Operators',
  'Forklift Operators',
  'Packers',
  'Assemblers',
  'Shipping And Receiving Associates',
  'And More…',
];
const Banking = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Light Industrial'
        paragraph='TPowering productivity and performance in Light Industrial operations with agility and efficiency.
'
      />
      <Paragraph
        title={'Light Industrial'}
        description={[
          'Light industrial employers struggle to find reliable, skilled workers in today’s market. At the same time, light industrial talent struggles to find jobs with employers who value their work.',
          'Wouldn’t it be great if there were light industrial staffing agencies that could bridge that gap and connect good business with good people?',
          'We have been using our proven, specialized approach to ensure that industrial and manufacturing businesses can connect with the talent they need, exactly when they need it. AdientOne utilizes modern recruiting practices to locate, attract and retain the skilled laborers companies need.',
          'Altislink offers Light Industrial clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand.',
        ]}
      />
      <Points title='Production' points={points} />
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Banking;
