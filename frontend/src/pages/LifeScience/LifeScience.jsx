import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';



const LifeScience = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Pharmaceutical / Life Sciences – Clinical Recruitment'
        paragraph='Delivering specialized talent in Pharmaceutical and Life Sciences to drive clinical excellence and innovation.
'
      />
      <Paragraph
        title={'PHARMACEUTICAL / LIFE SCIENCES'}
        description={
          'The Pharmaceutical and Life Sciences industries operate with significant operational and regulatory challenges, have the constant demand to release new and innovative products and face increasing pressure to demonstrate profitability. At the same time, patent protection is eroding, consumers are looking for lower-cost alternatives, and competition is fierce.'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default LifeScience;
