import React, { useState, useEffect, useRef } from 'react';
import itTalentVideo from '../../assets/itTalent.mp4';
import { assets } from '../../assets/assets';
import './ItTalent.css';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Technology from '../../components/Technology/Technology';
import HelpYou from '../../components/HelpYou/HelpYou';
import Global from '../../components/Global/Global';
import Industry from '../../components/Industry/Industry';
import HireForm from '../HireForm/HireForm';
import AboutUs from '../Aboutus/AboutUs';
import Paragraph from '../../components/Paragraph/paragraph';
import Service from '../../components/Service/Service';

// AnimatedNumber component from Home.jsx
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

const ItTalent = () => {
  const expRef = useRef(null);
  const [expInView, setExpInView] = useState(false);

  // Stats data for the experience section
  const stats = [
    { value: 38000, label: 'Jobs Worked Annually' },
    { value: 20000, label: 'Job Applicants Monthly' },
    { value: 60000, label: 'Candidates Submitted Annually' },
    { value: 12500, label: 'Contractors Currently on Assignment' },
  ];

  // Images for the slider from assets

  // Auto-advance the slider

  // Handle scroll for experience section animation
  useEffect(() => {
    const handleScroll = () => {
      if (!expRef.current) return;
      const rect = expRef.current.getBoundingClientRect();
      if (rect.top < window.innerWidth && rect.bottom > 0) {
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
          <h1>Executive Search</h1>
          <p>
            Connecting Top Tech Professionals
            <br />
            with Industry Leaders
          </p>
        </div>
      </div>
      <Paragraph
  title={'Executive Search'}
  description={[
    'We specialize in finding highly skilled resources that bring the best to you and are motivated and productive from the get-go. Our client partner teams come from diverse cross section of skills and different levels of experience. Our network of recruiters and partners are the key to recruiting qualified professionals who help meet the organizational goals of our clients. We are completely focussed and committed in understanding the clients consulting needs and delivering it in an unparalleled way in quickest turn-around time.',
    'Over the years we have realized that “the same leader may be perfect for one company and totally wrong for another” and therefore it is really important to understand the minutest details and objectives of the recruitment for a particular position before initiating the search.',
    'We believe in partnership with the best and providing the best to our clients. Whatever is the consulting need, whether a full time or a contractual position for a specific project, we take the assignments with commitment to great execution.',
    'A key differentiator and as standard practice, we always do the Screening Interviews, Skills inventory, Personal and Professional Reference checks, back ground checks and work authorization check, in co-ordination with the clients.'
  ]}
/>

      {/* 
      <div className='talent-partners-section'>
        <h2>Our Trusted Partners</h2>
        <p>We connect top IT talent with industry-leading companies</p> */}

      {/* <div className='image-slider-container'>
          <div className='image-slider'>
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`slider-image ${
                  index === currentSlide ? 'active' : ''
                }`}>
                <img src={image} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className='slider-dots'>
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}></span>
            ))}
          </div>
        </div>
      </div> */}

      <div className='our-talent-services'>
        <h1>Our talent services</h1>
        <p>
          The acceleration of automation, globalisation and changing workforce
          demographics are increasing the demand for  skills that bring
          together technology, people and industry knowledge. We'll quickly help
          you access talent through the following services:
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

      <div className='in-demand-roles-section'>
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
      </div>
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
      <HireForm />
    </div>
  );
};

export default ItTalent;
