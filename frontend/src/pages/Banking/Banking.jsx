import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';

// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];

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
        description={
          'Light industrial employers struggle to find reliable, skilled workers in today’s market. At the same time, light industrial talent struggles to find jobs with employers who value their work.'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Banking;
