import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';


const Telecom = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='TELECOMMUNICATIONS SOLUTIONS'
        paragraph='Transform telecommunications with our innovative technology solutions and specialized talent'
      />
    
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Telecom;
