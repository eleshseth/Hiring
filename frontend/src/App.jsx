import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import HireForm from './pages/HireForm/HireForm';
import ItTalent from './pages/ItTalent/ItTalent';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'contact':
        return <ContactForm />;
      case 'jobSearch':
        return <HireForm />;
      case 'itTalent':
        return <ItTalent />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      {renderSection()}
      <Footer />
    </>
  );
}

export default App;
