import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';

const sliderImages = [
  assets.hp,
  assets.Canadian,
  assets.Citibank,
  assets.Desjardins,
  assets.Coreio,
  assets.bank,
  assets.honda,
];

const Dynamics360 = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='DYNAMICS 365 SOLUTIONS'
        paragraph='Transform your business processes with our Microsoft Dynamics 365 expertise and implementation solutions'
      />
      <Slider images={sliderImages} />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Dynamics360;
