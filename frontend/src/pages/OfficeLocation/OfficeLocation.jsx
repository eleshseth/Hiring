import React from 'react';
import './OfficeLocation.css';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import ContactForm from '../../components/ContactForm/ContactForm';

const OfficeLocation = () => {
  return (
    <div className='office-location'>
      <Video
        videoSrc={assets.video}
        heading='OUR OFFICE LOCATIONS'
        paragraph='Connect with our global network of IT staffing experts'
      />

      <div className='location-content'>
        <div className='headquarters'>
          <h2>Global Headquarters</h2>
          <div className='address'>
            <h3>USA Office</h3>
            <p>760 F ST</p>
            <p>Blaine, WA 98230</p>
            <p>United States</p>
            <div className='contact-info'>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@altislink.com</p>
            </div>
          </div>
          <div className='office-hours'>
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className='map-section'>
        <h2>Visit Our Office</h2>
        <div className='map-container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.892!2d-122.747!3d48.993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU5JzM0LjgiTiAxMjLCsDQ0JzQ5LjIiVw!5e0!3m2!1sen!2sus!4v1629308000000!5m2!1sen!2sus'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default OfficeLocation;
