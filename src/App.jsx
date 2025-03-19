import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </div>
  );
};

export default App;