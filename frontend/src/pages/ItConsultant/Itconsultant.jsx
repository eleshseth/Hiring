import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import ContactForm from '../../components/ContactForm/ContactForm';
import Paragraph from '../../components/Paragraph/paragraph';

const Itconsultant = () => {
  return (
    <div>
      <Video
        videoSrc={assets.itconsultant}
        heading='Contract to Hire'
        paragraph='Bridging short-term needs with long-term talent through seamless contract-to-hire solutions.
'
      />
      <Paragraph
        title={'Contract to Hire'}
        description={
          'Altislink also provides the flexibility to its customer a risk free hiring approach that encompasses of hiring a candidate through contract to hire route. We understand the time limitation and other risks involved in selection of a right candidate for many positions. For some position, you are more interested in hiring known candidates who has some experience working in your environment. This strategy can dramatically reduce your hiring risk by enabling you to test the employee’s skills, compatibility, and work ethics before making a long-term hiring decision. Likewise, the employee can determine if the position and company are perfect fit for them, which in turn helps you reduce unexpected turnover'
        }
      />
      <img src={assets.itco2} />
      <img src={assets.itco1} />
      <img src={assets.itco3} />
      <ContactForm />
    </div>
  );
};

export default Itconsultant;
