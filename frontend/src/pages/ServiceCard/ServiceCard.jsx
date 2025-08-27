import './ServiceCard.css';

const ServiceCard = ({ icon:  title, description }) => {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <div className="service-card-icon">
          <Icon />
        </div>
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-description">{description}</p>
      <div>
        <button className="service-card-button">Learn More →</button>
      </div>
    </div>
  );
};

export { ServiceCard };