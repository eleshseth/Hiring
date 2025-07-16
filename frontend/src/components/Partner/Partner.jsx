import React, { useEffect, useRef, useState } from 'react';
import './Partner.css';

const partnerStats = [
  { value: 72, label: '2023 Client NPS score' },
  { value: 80, label: '2023 Talent NPS score' },
  { value: 92, label: 'Best of Staffing Client and Talent Awards' },
  
];

const AnimatedNumber = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const duration = 1800;
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

const Partner = () => {
  const partnerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!partnerRef.current) return;
      const rect = partnerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='partner-section' ref={partnerRef}>
      <div className='partner-title'>
        Trusted by Leading Organizations Worldwide
      </div>
      <div className='partner-details'>
        {partnerStats.map((stat) => (
          <div key={stat.label}>
            <h1>
              <AnimatedNumber target={stat.value} start={inView} />
              {stat.label === 'Client Satisfaction (%)' ? '%' : '%'}
            </h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
