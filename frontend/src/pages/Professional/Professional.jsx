import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';

const Professional = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Public Sector'
        paragraph='Supporting the Public Sector with dedicated talent and solutions to drive community impact and operational excellence.
'
      />
      <Paragraph
        title={'PUBLIC SECTOR'}
        description={
          'The Public Sector faces unique challenges in attracting and retaining talent. Altislink is committed to supporting government organizations with the specialized skills and expertise they need to drive positive change and improve service delivery.'
        }
      />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Professional;
