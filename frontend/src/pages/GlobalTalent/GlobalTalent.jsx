import React from 'react';
import './GlobalTalent.css';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import TalentServices from '../../components/TalentServices/TalentServices';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import HelpYou from '../../components/HelpYou/HelpYou';
import Technology from '../../components/Technology/Technology';
import Industry from '../../components/Industry/Industry';
import Global from '../../components/Global/Global';
import ContactForm from '../../components/ContactForm/ContactForm';
import Paragraph from '../../components/Paragraph/paragraph';
import Service from '../../components/Service/Service';



// const sliderImages = [
//   assets.hp,
//   assets.Canadian,
//   assets.Citibank,
//   assets.Desjardins,
//   assets.Coreio,
//   assets.bank,
//   assets.honda,
// ];
const GlobalTalent = () => (
  <div className='global-talent-page'>
    <Video
      videoSrc={assets.global}
      heading='Contingent Staffing'
      paragraph='Providing flexible contingent staffing solutions to meet evolving business needs with speed and precision.
'
    />
   <Paragraph
  title={'Contingent Staffing'}
  description={
    <ul className="list-disc pl-5 space-y-2">
      <li>
        We have extensive knowledge in providing the complete range of technical skills and job roles at all levels. 
        We understand that contract staff is a valuable resource to all our clients and therefore we have experienced 
        and professional consultants with industry knowhow and expertise in our team, who are able to ensure best 
        suitable candidates with high calibre, are approached.
      </li>
      <li>
        We have an extensive network and database of candidates for both long and short-term assignments and all 
        candidates are contacted regularly by our recruiters ensuring our database is up to date and enabling us to 
        inform our clients if any highly experienced candidate becomes available.
      </li>
      <li>
        Our combination of industry expertise and proven recruitment processes ensures that clients benefit from a 
        fast, high quality and cost-effective recruitment service.
      </li>
      <li>
        Our recruitment process allows us to update our databases on a frequent basis. Our consultants are constantly 
        in the loop regarding new and exciting opportunities. We regularly advertise roles on the internet, job boards 
        and with agencies specializing in Software Developers, Business Analysts, Software Administrators, Accounting 
        and Financial, Help Desk Experts, Software Architects, IT Managers, Professionals and Management staff, to 
        attract the best of consultants. Most importantly, Adientone have a distinguished network of contacts within 
        the industry that ensure we have our finger on the pulse of the industry at all times.
      </li>
     
    </ul>
  }
/>

    <TalentServices />
    <div className='niche'>
      <h1>Niche Talent that fits your budget</h1>
      <p>
        At Procom Global Talent, we understand that finding specialized talent
        in areas like SAP, Security, DevOps and AI can be challenging and
        expensive. That's why we offer access to a diverse pool of experts in
        these niche areas, at rates that can save you up to 20% compared to
        traditional hiring methods. Our commitment to delivering value to our
        clients means that we work hard to vet and select the best IT talent, so
        you can be confident that you're getting top-notch experts. Experience
        the convenience of being paired with thoroughly vetted candidates in as
        little as 3 days.
      </p>
    </div>
    <Experience />
    <Service/>
    <Partner />
    <Engagements />
    <HelpYou />
    <Technology />
    <Industry />
    <Global />
    <ContactForm />
  </div>
);

export default GlobalTalent;
