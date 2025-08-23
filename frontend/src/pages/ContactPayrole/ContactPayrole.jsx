import React from 'react'
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner'; 
import Engagements from '../../components/Engagements/Engagements';
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

const ContactPayrole = () => {
  return (
    <div>
      <Video
        videoSrc={assets.contactpayrole}
        heading='Payroll Solutions'
        paragraph='Streamlining workforce management with accurate, compliant, and efficient payroll solutions.
'
      />
      <Paragraph
        title={'Payroll Solutions'}
        description={
          'In conjunction with our Independent Contractor Compliance solution or as a stand-alone solution, AdientOne provides payroll process outsourcing, enabling our clients to leverage their ability to tap into certain talent pools for contingent workers. Our services provide clients with the ability to identify candidates for contract employment and transfer the administrative burden of employment to us, including:'
        }
      />
      <Experience />
      <Partner />
      <Engagements />
    </div>
  );
}

export default ContactPayrole