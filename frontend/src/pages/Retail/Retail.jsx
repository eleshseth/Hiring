import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';

const Retail = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Finance Services Recruitment'
        paragraph='Connecting finance professionals with opportunities that drive growth, compliance, and innovation.
'
      />
      <Paragraph
        title={'FINANCE SERVICES'}
        description={
          'In the dynamic world of finance, organizations must navigate complex regulations and ever-changing market conditions. Altislink is dedicated to connecting finance professionals with the opportunities they need to thrive in this competitive landscape.'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Retail;
