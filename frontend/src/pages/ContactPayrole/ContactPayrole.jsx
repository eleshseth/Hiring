import React from 'react'
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner'; 
import Engagements from '../../components/Engagements/Engagements';
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
        description={[
          'In conjunction with our Independent Contractor Compliance solution or as a stand-alone offering, AltisLink provides comprehensive payroll process outsourcing. This enables our clients to effectively leverage access to specific talent pools for contingent workers while shifting the administrative burden of employment to us.',
          'Our payroll services include a wide range of support such as Prequalification, Background Screening, Drug Testing, Custom Onboarding, Payroll, Tax and Benefit Administration, Management and Reporting, along with other customized services tailored to client needs.',
          'By partnering with AltisLink, clients experience reduced risk, time savings, and significant cost efficiency — with a proven 10-15% cost reduction in most cases. Our services deliver the administrative support you need, when, where, and how you need it.',
          'Control costs, reduce risks, improve processes, and secure the talent you need through AltisLink’s payroll outsourcing solutions.',
          'For a more consultative and flexible approach to meet your payroll needs across the globe, contact AltisLink today.',
        ]}
      />
      <Experience />
      <Service/>
      <Partner />
      <Engagements />
    </div>
  );
}

export default ContactPayrole