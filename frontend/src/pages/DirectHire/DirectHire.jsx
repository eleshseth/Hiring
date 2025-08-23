import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import TalentServices from '../../components/TalentServices/TalentServices';
import Experience from '../../components/Experience/Experience';
import InDemand from '../../components/InDemand/InDemand';
import './DirectHire.css';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';   
import HelpYou from '../../components/HelpYou/HelpYou';
import Technology from '../../components/Technology/Technology';
import Industry from '../../components/Industry/Industry';
import Global from '../../components/Global/Global';
import HireForm from '../HireForm/HireForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Paragraph from '../../components/Paragraph/paragraph';

// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];

const DirectHire = () => {
  return (
    <div>
      {' '}
      <Video
        sty
        videoSrc={assets.directhire}
        heading='Permanent Hiring'
        paragraph='Take the stress out of hiring your next team member with the support of an experienced recruitment professional.
"
'
      />
      <Paragraph
        title={'Permanent Hiring'}
        description={
          'We help our clients to make their recruitment and onboarding processes effective and this is the reason we are currently partner of choice with several Software, Telecom, Research and Analytics, Information Technology, Banking & Finance, Travel, Fashion, Pharma, Medical, Hospitality and Consulting majors in various domains. Our innovative incentive-based peer networking has helped us tie up with a variety of senior, mid-level and Junior executives from the corporate world, who work as an extended arm of our family.'
        }
      />
      <TalentServices />
      <div className='save'>
        <h1>Save valuable time with the support of an expert.</h1>
        <p>
          Finding and hiring the talent you need is not a simple exercise. For
          permanent hires, the talent that you want is often currently in a
          full-time role somewhere else and likely not actively looking for
          another role. Having a sound strategy that you can use to go to market
          with your job requirement is an important step in the recruitment
          process. Working with an experienced recruiting partner can help you
          save valuable time in the process and allow you to focus on your other
          responsibilities.
        </p>
      </div>
      <div className='network'>
        <div className='content'>
          <h1>Access talent that is outside of your network.</h1>
          <p>
            One of the benefits of working with a staffing agency is that they
            have built a network of candidates from the work that they have
            completed on other jobs. Working with a capable staffing partner can
            ensure that your opportunity gets maximum exposure to the talent
            you’re interested in.
          </p>
        </div>
        <div className='image'>
          {' '}
          <img src={assets.network} alt='' />
        </div>
      </div>
      <Experience />
      <Partner />
      <Engagements />
      <HelpYou />
      <Technology />
      <Industry />
      <Global />
      <ContactForm />
    </div>
  );
};

export default DirectHire;
