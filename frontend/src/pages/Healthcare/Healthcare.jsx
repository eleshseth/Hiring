import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';

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
        description={
          'In the rapidly evolving telecommunications landscape, organizations must adapt to new technologies and changing consumer demands. Altislink is dedicated to connecting telecom companies with the talent they need to drive innovation and stay competitive.'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Healthcare;
