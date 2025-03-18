import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;