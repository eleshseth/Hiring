import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import ContactForm from '../../components/ContactForm/ContactForm';

const Itconsultant = () => {
  return (
    <div>
      <Video
        videoSrc={assets.itconsultant}
        heading='IT Consulting
Services'
        paragraph='Transform your IT performance with expert consulting that maximizes efficiency while minimizing costs.'
      />
      <img src={assets.itco2} />
      <img src={assets.itco1} />
      <img src={assets.itco3} />
      <ContactForm />
    </div>
  );
};

export default Itconsultant;
