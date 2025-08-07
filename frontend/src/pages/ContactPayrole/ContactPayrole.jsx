import React from 'react'
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

const ContactPayrole = () => {
  return (
    <div>
      <Video
        videoSrc={assets.contactpayrole}
        heading='CONTRACTOR PAYROLLING'
        paragraph='Minimize your classification and co-employment risks with a contractor payroll program thats designed to improve processes and save you money'
      />
      <Slider images={sliderImages} />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
}

export default ContactPayrole