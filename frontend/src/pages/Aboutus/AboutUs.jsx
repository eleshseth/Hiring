import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';

const aboutCards = [
  {
    image: assets.team,
    category: 'Our Team',
    title: 'Meet Our Experts',
    description:
      'Our experienced team is dedicated to delivering the best workforce solutions for your business.',
    link: '#',
  },
  {
    image: assets.professional,
    category: 'Culture',
    title: 'Driven by Values',
    description:
      'We foster a culture of integrity, respect, and excellence in everything we do.',
    link: '#',
  },
  {
    image: assets.officeboy,
    category: 'Impact',
    title: 'Making a Difference',
    description:
      'We help organizations and professionals achieve their goals and grow together.',
    link: '#',
  },
];

const AboutUs = () => {
  return (
    <div>
      <div className='procom'>
        <h1>WELCOME TO ALTISLINK</h1>
        <p>
          Whether you are curious about what makes us tick or you are looking
          for specific information about our team, you’re in the right spot.
        </p>
      </div>
      <div className='work '>
        <div>
          <h2>We want to work with you</h2>
          <p>
            We recognize that you have choices when it comes to choosing the
            right partner to help your organization and we respect that.
          </p>
        </div>
        <div>
          <img src={assets.team} alt='Teamwork' />
        </div>
      </div>
      <div className='workforce'>
        <h1>
          Looking for answers to your contingent workforce questions? We can
          help.
        </h1>
        <p>
          Whether you are curious about what makes us tick or you are looking
          for specific information about our team, you’re in the right spot.
        </p>
        <button>SEE OUR SOLUTIONS</button>
      </div>
      <div className='card'>
        {aboutCards.map((card, idx) => (
          <div
            className='aboutus-card'
            key={idx}
            style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
            <div className='aboutus-card-image'>
              <img src={card.image} alt={card.title} />
              <span className='aboutus-card-category'>{card.category}</span>
            </div>
            <div className='aboutus-card-body'>
              <h3 className='aboutus-card-title'>{card.title}</h3>
              <p className='aboutus-card-desc'>{card.description}</p>
            </div>
            <button className='aboutus-card-btn'>Read More</button>
          </div>
        ))}
      </div>
      <div className='end'>
        <h1>Find a Procom Expert. We want to work with you!</h1>
        <button>CONTACT US</button>
      </div>
     
    </div>
  );
};

export default AboutUs;
