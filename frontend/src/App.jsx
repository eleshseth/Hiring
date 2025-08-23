import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import HireForm from './pages/HireForm/HireForm';
import ItTalent from './pages/ItTalent/ItTalent';
import AboutUs from './pages/Aboutus/AboutUs';
import DirectHire from './pages/DirectHire/DirectHire';
import GlobalTalent from './pages/GlobalTalent/GlobalTalent';
import ItConsultant from './pages/ItConsultant/ItConsultant';
import ContactPayrole from './pages/ContactPayrole/ContactPayrole';
import BigData from './pages/BigData/BigData';
import Cybersecurity from './pages/Cybersecurity/Cybersecurity';
import CloudDevOps from './pages/CloudDevOps/CloudDevOps';
import Dynamics360 from './pages/Dynamics360/Dynamics360';
import Guidewire from './pages/Guidewire/Guidewire';
import ProjectManager from './pages/ProjectManager/ProjectManager';
import SAP from './pages/SAP/SAP';
import Salesforce from './pages/Salesforce/Salesforce';
import ServiceNow from './pages/ServiceNow/ServiceNow';
import Automotive from './pages/Automotive/Automotive';
import Banking from './pages/Banking/Banking';
import Energy from './pages/Energy/Energy';
import Gaming from './pages/Gaming/Gaming';
import Government from './pages/Government/Government';
import Healthcare from './pages/Healthcare/Healthcare';
import Insurance from './pages/Insurance/Insurance';
import LifeScience from './pages/LifeScience/LifeScience';
import Professional from './pages/Professional/Professional';
import Retail from './pages/Retail/Retail';
import Semiconductor from './pages/Semiconductor/Semiconductor';
import Telecom from './pages/Telecom/Telecom';
import OfficeLocation from './pages/OfficeLocation/OfficeLocation';
import Rpo from './pages/Rpo/Rpo';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavClick = (section) => {
    setCurrentView(section);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavClick={handleNavClick} />;
      case 'itTalent':
        return <ItTalent />;
      case 'directhire':
        return <DirectHire />;
      case 'rpo':
        return <Rpo />;
      case 'contact':
        return <ContactForm />;
      case 'jobSearch':
        return <HireForm />;
      case 'aboutus':
        return <AboutUs />;
      case 'globaltalent':
        return <GlobalTalent />;
      case 'itconsultant':
        return <ItConsultant />;
      case 'contactpayrole':
        return <ContactPayrole />;
      case 'bigdata':
        return <BigData />;
      case 'cybersecurity':
        return <Cybersecurity />;
      case 'clouddevops':
        return <CloudDevOps />;
      case 'dynamics360':
        return <Dynamics360 />;
      case 'guidewire':
        return <Guidewire />;
      case 'projectmanager':
        return <ProjectManager />;
      case 'sap':
        return <SAP />;
      case 'salesforce':
        return <Salesforce />;
      case 'servicenow':
        return <ServiceNow />;
      case 'automotive':
        return <Automotive />;
      case 'banking':
        return <Banking />;
      case 'energy':
        return <Energy />;
      case 'gaming':
        return <Gaming />;
      case 'government':
        return <Government />;
      case 'healthcare':
        return <Healthcare />;
      case 'insurance':
        return <Insurance />;
      case 'lifescience':
        return <LifeScience />;
      case 'professional':
        return <Professional />;
      case 'retail':
        return <Retail />;
      case 'semiconductor':
        return <Semiconductor />;
      case 'telecom':
        return <Telecom />;
      case 'officelocation':
        return <OfficeLocation />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      {renderContent()}
      <Footer onNavClick={handleNavClick} />
    </>
  );
}

export default App;
