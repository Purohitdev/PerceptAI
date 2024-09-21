import React from 'react';
import GetStarted from '../Buttons/GetStarted';
import StarUs from '../Buttons/StarUs';
import Navbar from '../Navbar/Navbar';
import HeroContent from './HeroContent';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat ">
            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
        </div>

        {/* Content */}
        <HeroContent />
      </main>
    </div>
  );
};

export default LandingPage;
