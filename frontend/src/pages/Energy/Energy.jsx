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

const Energy = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='Technology Recruitment'
        paragraph='Connecting top tech talent with cutting-edge opportunities to drive innovation and growth.
'
      />
      <Paragraph
        title={'Technology Recruitment'}
        description={
          'Regardless, the industry is constantly driven by innovation and speed-to-market, by demanding users. For success, technology companies must address the challenge of globalization and competition, revenue and margin pressures due to current or would-be investors, and demand accelerated innovation'
        }
      />
      <Slider images={sliderImages} />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Energy;
