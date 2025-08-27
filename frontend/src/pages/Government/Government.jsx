import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';
import Points from '../../components/Points/Points';
import Service from '../../components/Service/Service';

 const ecommercePoints = [
   'Financial Reporting Specialist',
   'Omnichannel Manager',
   'E-Commerce Sales Associate',
   'Customer Service Rep',
   'Product Manager',
   'Marketing Specialist',
   'Pricing Analyst',
   'Inventory Control Specialist',
   'Supply Chain Analyst',
   'Fulfillment Manager',
   'E-Commerce Developer',
   'E-Commerce IT Management',
   'Logistics Coordinator',
   'CRM Specialist',
   'Data & Analytics Specialist',
   'Graphic Designer',
   'Merchandising Specialist',
   'Logistics Coordinator',
   'Retail Strategist',
   'Legal & Compliance Specialist',
 ];

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
        description={[
          'The best retailers are constantly innovating to align the customer experience with their overall business strategy. The retail landscape has been reshaped by the Internet, creating new business models and adding new dimensions to traditional brick-and-mortar stores.',
          'Consumer behavior is shifting rapidly, moving from physical store purchases to online retailing. This shift impacts every aspect of retail operations – from marketing and customer service to inventory management and fulfillment.',
          'At the same time, retailers face challenges around maximizing the value of expensive real estate and adapting to evolving consumer expectations in a highly competitive marketplace.',
          'We help retailers acquire and manage the talent they need, with specialized capabilities in Supply Chain, POS, Merchandising, and E-commerce – enabling our clients to compete and succeed in today’s dynamic retail environment.',
        ]}
      />
      <Points points={ecommercePoints} />
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Government;
