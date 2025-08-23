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


const Guidewire = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='GUIDEWIRE SOLUTIONS'
        paragraph='Transform your insurance operations with our Guidewire expertise and implementation solutions'
      />
      <Paragraph
        title={'GUIDEWIRE SOLUTIONS'}
        description={
          'In the ever-evolving landscape of insurance, Guidewire stands out as a leader in providing innovative solutions. Altislink is proud to partner with Guidewire to deliver exceptional results for our clients.'
        }
      />
      <Slider images={sliderImages} />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Guidewire;
