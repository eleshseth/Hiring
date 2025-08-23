import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';


const Government = () => {
  return (
    <div>
      <Video
        videoSrc={assets.video}
        heading='RETAIL'
        paragraph='Empowering Retail with dynamic talent and innovative solutions to enhance customer experience and drive growth.'
      />
      <Paragraph
        title={'RETAIL'}
        description={
          'The best retailers are continually developing new ways to align the customer experience with their business strategy. The Internet has dramatically changed the retail landscape, creating opportunities for new business models and adding new dimensions to brick and mortar retailers. Economics data clearly indicates the consumer behavioral pattern changing from physical location buying to online retailing as well as the marketing, customer service, and inventory management of all retail business. Tangential to the consumer experience changing, all retailers need to be concerned with the proper use of expensive real estate to compete in today’s marketplace.'
        }
      />
    
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Government;
