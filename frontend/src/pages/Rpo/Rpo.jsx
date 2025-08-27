import React, { useState, useEffect, useRef } from 'react';
import itTalentVideo from '../../assets/itTalent.mp4';
import { assets } from '../../assets/assets';
import './Rpo.css';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Technology from '../../components/Technology/Technology';
import HelpYou from '../../components/HelpYou/HelpYou';
import Global from '../../components/Global/Global';
import Industry from '../../components/Industry/Industry';
import HireForm from '../HireForm/HireForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Paragraph from '../../components/Paragraph/paragraph';
import Service from '../../components/Service/Service';

// AnimatedNumber component
const AnimatedNumber = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const duration = 2200;
    const increment = Math.ceil(target / (duration / 16));
    let raf;

    const animate = () => {
      startVal += increment;
      if (startVal < target) {
        setCount(startVal);
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [target, start]);

  return <span>{count.toLocaleString()}</span>;
};

const Rpo = () => {
  const expRef = useRef(null);
  const [expInView, setExpInView] = useState(false);

  // Stats data for the experience section
  const stats = [
    { value: 38000, label: 'Jobs Worked Annually' },
    { value: 20000, label: 'Job Applicants Monthly' },
    { value: 60000, label: 'Candidates Submitted Annually' },
    { value: 12500, label: 'Contractors Currently on Assignment' },
  ];

  // Handle scroll for experience section animation
  useEffect(() => {
    const handleScroll = () => {
      if (!expRef.current) return;
      const rect = expRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setExpInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='it-talent-page'>
      <div className='it-talent-container'>
        <video
          className='it-talent-video'
          src={itTalentVideo}
          autoPlay
          loop
          muted
        />
        <div className='it-talent-title'>
          <h1>RPO</h1>
          <p>
            Connecting Top Tech Professionals
            <br />
            with Industry Leaders
          </p>
        </div>
      </div>
      <Paragraph
        title={'RPO Solutions'}
        description={[
          'AltisLink offers highly-customized recruiting solutions with maximum flexibility in engagement. We understand that every organization needs to attract, retain, and manage the best talent to maintain a competitive edge. However, for many companies, recruitment is not a core competency. AltisLink helps clients accelerate growth by attracting top talent—both locally and globally—while minimizing hassle, time, and cost.',
          'Through our Recruitment Process Outsourcing (RPO) model, AltisLink enables clients to outsource all or part of their permanent recruitment services. This approach drives significant benefits in terms of cost reduction, efficiency, service quality, and scalability.',
          'Our RPO service offerings include:',
          'Offshore Global RPO: Our offshore recruiting teams leverage end-to-end expertise, multiple sourcing channels, the latest technologies, big data trends, and strong ties with local hiring communities to deliver high-quality results from day one.',
          'End-to-End Enterprise RPO: With this model, clients can fully offload their hiring processes. We align closely with business goals, providing an agile, targeted, sustainable, impactful, and scalable talent delivery model that integrates seamlessly within the organization.',
          
        ]}
      />

      <div className='our-talent-services'>
        <h1>Our talent services</h1>
        <p>
          The acceleration of automation, globalisation and changing workforce
          demographics are increasing the demand for IT skills that bring
          together technology, people and industry knowledge. We'll quickly help
          you access IT talent through the following services:
        </p>
        <div className='images'>
          <div className='service-item'>
            <img src={assets.professional} alt='Contract Staffing' />
            <h3>Contract Staffing</h3>
          </div>
          <div className='service-item'>
            <img src={assets.banking} alt='Direct Hire' />
            <h3>Direct Hire</h3>
          </div>
          <div className='service-item'>
            <img src={assets.government} alt='Global Talent' />
            <h3>Global Talent</h3>
          </div>
        </div>
      </div>

      {/* <div className='in-demand-roles-section'>
        <div className='in-demand-content'>
          <h2>The most in-demand roles:</h2>
          <ul className='roles-list'>
            <li>AI/Machine Learning</li>
            <li>Angular</li>
            <li>Big Data/Data Science/Analytics</li>
            <li>Cloud (AWS/Azure)</li>
            <li>Cybersecurity/Security</li>
            <li>DevOps (Azure, AWS)</li>
          </ul>
        </div>
        <div className='in-demand-image'>
          <img src={assets.officeboy} alt='IT Professional' />
        </div>
      </div> */}

      <div className='experience' ref={expRef}>
        <div className='experience-text'>
          45+ Years of Recruitment Experience
        </div>
        <div className='our-details'>
          {stats.map((stat) => (
            <div key={stat.label}>
              <h1>
                <AnimatedNumber target={stat.value} start={expInView} />+
              </h1>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
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
};

export default Rpo;
