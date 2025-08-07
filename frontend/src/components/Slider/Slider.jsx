import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({
  images = [],
  heading = 'Our Trusted Partners',
  subheading = 'We connect top IT talent with industry-leading companies',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='slider-section'>
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <div className='slider-image-container'>
        <div className='slider-image-wrapper'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-image${
                index === currentSlide ? ' active' : ''
              }`}>
              <img src={image} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className='slider-dots'>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot${index === currentSlide ? ' active' : ''}`}
              onClick={() => setCurrentSlide(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
