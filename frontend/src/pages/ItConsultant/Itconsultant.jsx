import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import ContactForm from '../../components/ContactForm/ContactForm';

const Itconsultant = () => {
  return (
    <div>
      <Video
        videoSrc={assets.itconsultant}
        heading='Contract to Hire'
        paragraph='Bridging short-term needs with long-term talent through seamless contract-to-hire solutions.
'
      />
      <img src={assets.itco2} />
      <img src={assets.itco1} />
      <img src={assets.itco3} />
      <ContactForm />
    </div>
  );
};

export default Itconsultant;
