import React, { useState, useEffect, useRef } from 'react';
import './Points.css';

const Points = ({ points }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of items
            points.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [points]);

  const getRandomIcon = () => {
    const icons = ['✨', '🚀', '⭐', '💡', '🎯', '⚡', '🔥', '💎'];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className='points-container' ref={containerRef}>
      <div className='floating-particles'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      <ul className='points-list'>
        {points.map((point, index) => (
          <li
            key={index}
            className={`points-item ${
              visibleItems.includes(index) ? 'visible' : ''
            } ${hoveredIndex === index ? 'hovered' : ''}`}
            style={{
              '--delay': `${index * 0.1}s`,
              '--random-delay': `${Math.random() * 2}s`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <div className='point-icon-wrapper'>
              <span className='point-icon'>{getRandomIcon()}</span>
              <div className='icon-ripple'></div>
            </div>
            <span className='point-text'>{point}</span>
            <div className='shimmer-effect'></div>
            <div className='glow-effect'></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
