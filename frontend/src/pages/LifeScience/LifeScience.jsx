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

const LifeScience = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Pharmaceutical / Life Sciences – Clinical Recruitment'
        paragraph='Delivering specialized talent in Pharmaceutical and Life Sciences to drive clinical excellence and innovation.
'
      />
      <Slider images={sliderImages} />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default LifeScience;
