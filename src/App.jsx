import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;