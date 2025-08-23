import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';

const Insurance = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Hospitality'
        paragraph='Enhancing Hospitality with exceptional talent and tailored solutions to deliver unforgettable guest experiences.'
      />
      <Paragraph
        title={'HOSPITALITY'}
        description={
          'In the competitive world of hospitality, delivering exceptional guest experiences is paramount. Altislink is dedicated to connecting hospitality organizations with the talent and solutions they need to thrive.'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Insurance;
