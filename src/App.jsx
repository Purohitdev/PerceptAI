import LandingPage from './Components/Section1/Hero/Hero';
import React from 'react';
import RunProjectButton from './Components/Section2/RunProjectButton';
import ProjectLinks from './Components/Section2/ProjectLinks';
import './App.css'
import Section2 from './Components/Section2/Section2';

function App() {
  return (
    <div>

      <LandingPage />
      {/* <ProjectLinks /> */}
      <Section2 />
    </div>
  );
}

export default App;
