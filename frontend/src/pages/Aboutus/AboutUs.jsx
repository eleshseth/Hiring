import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets";
import Video from "../../components/Video/Video";

const aboutCards = [
  {
    image: assets.team,
    category: "Our Team",
    title: "Meet Our Experts",
    description:
      "Our experienced team is dedicated to delivering the best workforce solutions for your business.",
    link: "#",
  },
  {
    image: assets.professional,
    category: "Culture",
    title: "Driven by Values",
    description:
      "We foster a culture of integrity, respect, and excellence in everything we do.",
    link: "#",
  },
  {
    image: assets.officeboy,
    category: "Impact",
    title: "Making a Difference",
    description:
      "We help organizations and professionals achieve their goals and grow together.",
    link: "#",
  },
];

const AboutUs = () => {
  return (
    <div>
      <div className="procom">
        <h1>WELCOME TO ALTISLINK</h1>
        <p style={{width:"70%"}}>
          Our Industry Practice Groups Are Guided By Professionals Who Have
          In-Depth Knowledge And Experience Across A Range Of Sectors. Our Team
          Members Are Seasoned And Offer An Insider’s Perspective Which They
          Have Gained Through The Senior Positions They Have Held Within Leading
          Fortune 500 Companies – Market Leaders. We Therefore Know How To
          Deliver The Most Suited Candidates For C-Suite Positions In An
          Evolving Market. Our Industry Practices Include Services, Information
          Technology, Financial Services, Research And Analytics, Retail,
          Management Consulting And Other Professional Services. We Firmly
          Believe That Human Resource Is The Backbone Of Any Organization And
          Recruitment Is The Most Important Human Resources Function When It
          Comes To Return On Investment. We At Adientone, While Working With The
          Clients, Believe That It Is Of Utmost Importance To Thoroughly
          Understand The Strategic Importance Of The Position And Expectations
          From The Prospective Executives By Collaborating With Our Clients.
          This Approach Helps Us In Spotting The Leaders With Required Skills
          And Experience, Who Are Ready To Accept The New Challenges And Deliver
          Outstanding Results. We Constantly Strive To Identify The Best Talent
          In Varied Industries Across The Globe Through Rigorous Approach And
          Network. We Also Believe In Maintaining Long Term Relations Not Only
          With Our Clients But Also With Industry Leaders As We Know That These
          Leaders Make Things Happen Around The World. Our Deep Understanding Of
          The Industries And Continuous Efforts Has Helped Clients In Building
          Leadership Teams Which Have Been Instrumental In Delivering The
          Results By Exceeding Expectations Against All Odds. Our Executive Team
          At Adientone Consists Of A Diverse Group Of Experienced Executives Who
          Are Leaders In Their Communities And In The Business World. We Are
          Especially Good Listeners And Pride Ourselves In Strategically
          Aligning Ourselves To Our Customer’s Business Objectives. Our Vision
          For Success Is To Provide Significant Value In IT Managed Services And
          Talent Management Solutions With Complete Satisfaction.
        </p>
      </div>
      <div className="work ">
        <div>
          <h2>We want to work with you</h2>
          <p>
            We recognize that you have choices when it comes to choosing the
            right partner to help your organization and we respect that.
          </p>
        </div>
        {/* <div>
          <img src={assets.team} alt='Teamwork' />
        </div> */}
      </div>
      <div className="workforce">
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
      <div className="card">
        {/* {aboutCards.map((card, idx) => (
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
        ))} */}
      </div>
      <div className="end">
        <h1>Find a Expert. We want to work with you!</h1>
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

export default AboutUs;
