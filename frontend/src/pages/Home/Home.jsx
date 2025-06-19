import React from "react";
import { assets } from "../../assets/assets";
import "./Home.css";
import { ServicesSection } from "../ServiceSection/ServiceSection";

const Home = () => {
  const cards = [
    {
      icon: "📈",
      title: "Analytics",
      description: "Gain insights into your data with our advanced analytics tools.",
    },
    {
      icon: "💻",
      title: "Development",
      description: "Custom software solutions tailored to your business needs.",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Protect your data with our cutting-edge security solutions.",
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description: "Leverage the power of the cloud for scalability and efficiency.",
    },
    {
      icon: "📞",
      title: "Support",
      description: "24/7 support to ensure your operations run smoothly.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Drive innovation with our state-of-the-art technology solutions.",
    },
    {
      icon: "📊",
      title: "Reporting",
      description: "Generate detailed reports to track your progress and success.",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Protect your data with our cutting-edge security solutions.",
    },{
      icon: "📞",
      title: "Support",
      description: "24/7 support to ensure your operations run smoothly.",
    },
  ];

  return (
    <div>
      <div className="banner-container">
        <img src={assets.banner} alt="banner" className="banner-image" />
        <div className="banner-text">
          <h1>Empowering IT Excellence</h1>
          <h2>Connecting Tech Talent with Tomorrow’s Success Stories</h2>
          <button className="banner-button">Get Started</button>
        </div>
      </div>
      <div className="experience">
        <div className="experience-text">
          45+ Years of Recruitment Experience
        </div>
        <div className="our-details">
          <div>
            <h1>38,000+</h1>
            <p>Jobs Worked Annually</p>
          </div>
          <div>
            <h1>20,000+</h1>
            <p>Job Applicants Monthly</p>
          </div>
          <div>
            <h1>60,000+</h1>
            <p>Candidates Submitted Annually</p>
          </div>
          <div>
            <h1>12,500+</h1>
            <p>Contractors Currently on Assignment</p>
          </div>
        </div>
      </div>
      <div className="solutions">
        <h1>Tailored IT Staffing Solutions</h1>
        <h4>Expert services that align with your unique needs</h4>
        <div className="solutions-grid">
          {cards.map((card, index) => (
            <div key={index} className="solution-card">
              <div className="solution-card-icon">{card.icon}</div>
              <h3 className="solution-card-title">{card.title}</h3>
              <p className="solution-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tech">
        <div className="tech-heading">
          <h1>Technology Specializations</h1>
          <p>Staffing experts in vital IT domains</p>
        </div>
        <div className="tech-buttons">
          <button className="tech-button">Salesforce</button>
          <button className="tech-button">ServiceNow</button>
          <button className="tech-button">Java Developers</button>
          <button className="tech-button">SAP</button>
          <button className="tech-button">DevOps & Cloud</button>
          <button className="tech-button">Big Data</button>
          <button className="tech-button">Project Managers</button>
          <button className="tech-button">Cybersecurity</button>
        </div>
      </div>
      <div className="specific">
        <h1>Industry-Specific Expertise</h1>
        <div className="specific-grid">
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
          <div className="specific-image"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;