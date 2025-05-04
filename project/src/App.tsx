import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import TeamSection from './components/TeamSection';
import HardwareSection from './components/HardwareSection';
import MechanismSection from './components/MechanismSection';
import DemoSection from './components/DemoSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light font-rajdhani">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <TeamSection />
      <HardwareSection />
      <MechanismSection />
      <DemoSection />
      <ContactSection />
    </div>
  );
}

export default App;