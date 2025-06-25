import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleNavClick = (section) => {
    if (section === 'contact') {
      setShowContact(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowContact(false);
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      {showContact ? <ContactForm /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
