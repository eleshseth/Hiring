import React, { useEffect, useState, useRef } from 'react';
import { assets } from '../../assets/assets';
import './Home.css';
import { ServicesSection } from '../ServiceSection/ServiceSection';

const stats = [
  { value: 38000, label: 'Jobs Worked Annually' },
  { value: 20000, label: 'Job Applicants Monthly' },
  { value: 60000, label: 'Candidates Submitted Annually' },
  { value: 12500, label: 'Contractors Currently on Assignment' },
];

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

const Home = () => {
  const cards = [
    {
      icon: '📈',
      title: 'Analytics',
      description:
        'Gain insights into your data with our advanced analytics tools.',
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Custom software solutions tailored to your business needs.',
    },
    {
      icon: '🔒',
      title: 'Security',
      description:
        'Protect your data with our cutting-edge security solutions.',
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description:
        'Leverage the power of the cloud for scalability and efficiency.',
    },
    {
      icon: '📞',
      title: 'Support',
      description: '24/7 support to ensure your operations run smoothly.',
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Custom software solutions tailored to your business needs.',
    },
  ];

  const expRef = useRef(null);
  const [expInView, setExpInView] = useState(false);

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
    <div>
      <div className='banner-container'>
        <img src={assets.banner} alt='banner' className='banner-image' />
        <div className='banner-text'>
          <h1>Empowering Excellence</h1>
          <h2>Connecting Talent with Tomorrow’s Success Stories</h2>
          <button className='banner-button'>Get Started</button>
        </div>
      </div>
      <div className='experience' ref={expRef}>
        <div className='experience-text'>
      Years of Recruitment Experience
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
      <div className='solutions'>
        <h1>Tailored IT Staffing Solutions</h1>
        <h4>Expert services that align with your unique needs</h4>
        <div className='solutions-grid'>
          {cards.map((card, index) => (
            <div key={index} className='solution-card'>
              <div className='solution-card-icon'>{card.icon}</div>
              <h3 className='solution-card-title'>{card.title}</h3>
              <p className='solution-card-description'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='tech'>
        <div className='tech-heading'>
          <h1>Technology Specializations</h1>
          <p>Staffing experts in vital IT domains</p>
        </div>
        <div className='tech-buttons'>
          <button className='tech-button'>Salesforce</button>
          <button className='tech-button'>ServiceNow</button>
          <button className='tech-button'>Java Developers</button>
          <button className='tech-button'>SAP</button>
          <button className='tech-button'>DevOps & Cloud</button>
          <button className='tech-button'>Big Data</button>
          <button className='tech-button'>Project Managers</button>
          <button className='tech-button'>Cybersecurity</button>
        </div>
      </div>
      <div className='specific'>
        <h1>Industry-Specific Expertise</h1>
        <div className='specific-grid'>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.banking})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.gaming})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.healthcare})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.insurance})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.professional})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.retail})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.telecom})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.semiconductor})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.government})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.energy})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.life})` }}></div>
          <div
            className='specific-image'
            style={{ backgroundImage: `url(${assets.automitive})` }}></div>
        </div>
      </div>
      <div className='video-section'>
        <video className='background-video' autoPlay loop muted>
          <source src={assets.video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='video-content'>
          <h2>Transform Your IT Workforce</h2>
          <p>Partner with us for innovative staffing solutions</p>
          <button className='video-cta'>Learn More</button>
        </div>
      </div>
      <div className='help'>
        <h1>How we can help you find IT talent</h1>
        <div className='help-grid'>
          <div>
            <img className='help-image' src={assets.work} />
          </div>
          <div className='help-dropdown'>
            <div className='dropdown-box'>
              <h3>Contract Staffing</h3>
              <div className='dropdown-content'>
                <p>Access top IT talent for your project needs</p>
              </div>
            </div>
            <div className='dropdown-box'>
              <h3>Direct Hire</h3>
              <div className='dropdown-content'>
                <p>Find permanent additions to your team</p>
              </div>
            </div>
            <div className='dropdown-box'>
              <h3>Staff Augmentation</h3>
              <div className='dropdown-content'>
                <p>Scale your team efficiently with skilled professionals</p>
              </div>
            </div>
            <div className='dropdown-box'>
              <h3>Managed Services</h3>
              <div className='dropdown-content'>
                <p>End-to-end project management solutions</p>
              </div>
            </div>
            <div className='dropdown-box'>
              <h3>Global Talent</h3>
              <div className='dropdown-content'>
                <p>Access worldwide tech expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='division'></div>
      <div className='savings'>
        <div className='saving-grid'>
          <div className='saving-content'>
            <h2>Saving Money Through Direct Sourcing</h2>
            <p>
              A practical plan to help you reduce your contingent worker costs
              through Direct Sourcing.
            </p>
            <button className='saving-button'>Learn More</button>
          </div>
          <div className='saving-image-container'>
            <img src={assets.saving} alt='savings' className='saving-image' />
            <div className='saving-overlay'></div>
          </div>
        </div>
      </div>
      {/* Insights Section */}
      <div className='insights'>
        <h1 className='insights-heading'>
          Insights about Talent Acquisition and
          <br />
          Contingent Workforce Management
        </h1>
        <div className='insights-cards'>
          <div className='insight-card'>
            <img
              src={assets.banking}
              alt='Talent Trends'
              className='insight-img'
            />
            <h3 className='insight-title'>2024 Talent Trends</h3>
            <p className='insight-desc'>
              Discover the latest trends shaping talent acquisition and
              workforce management in the IT sector.
            </p>
            <button className='insight-btn'>Read More</button>
          </div>
          <div className='insight-card'>
            <img
              src={assets.professional}
              alt='Contingent Workforce'
              className='insight-img'
            />
            <h3 className='insight-title'>Contingent Workforce Strategies</h3>
            <p className='insight-desc'>
              Learn how leading organizations are leveraging contingent talent
              for greater agility and results.
            </p>
            <button className='insight-btn'>Read More</button>
          </div>
          <div className='insight-card'>
            <img
              src={assets.gaming}
              alt='Tech Hiring'
              className='insight-img'
            />
            <h3 className='insight-title'>Tech Hiring Best Practices</h3>
            <p className='insight-desc'>
              Explore proven strategies for attracting and retaining top
              technology professionals.
            </p>
            <button className='insight-btn'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
