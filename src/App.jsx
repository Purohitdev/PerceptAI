import LandingPage from './Components/Section1/Hero/Hero';
import React from 'react';
import './App.css'
import Section2 from './Components/Section2/Section2';
import AnimatedNewsletter from './Components/Extras/Newsletter';
import BackendCheck from './Components/Footer/BackendCheck';

function App() {
  return (
    <div>

      <LandingPage />
      {/* <ProjectLinks /> */}
      <Section2 />
      <AnimatedNewsletter />
      <BackendCheck />
    </div>
  );
}

export default App;
