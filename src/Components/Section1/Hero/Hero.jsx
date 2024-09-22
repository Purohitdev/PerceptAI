import React from 'react';
import FloatingNavbar from '../../Section1/Navbar/Navbar';
import HeroContent from './HeroContent';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import image1 from '../../../assets/Images/image1.jpg';
import image2 from '../../../assets/Images/image2.jpg';
import image3 from '../../../assets/Images/image3.jpg';
import image4 from '../../../assets/Images/image4.jpg';
gsap.registerPlugin(ScrollTrigger);


const LandingPage = () => {

  
  useGSAP(() => {


   
    gsap.from( ".navbar", {
      y:-100,
      opacity:0,
      duration:1,
      
     })  

     
 

    gsap.from( ".wrap .box", {
     x:100,
     opacity:0,
     stagger:0.7,
     rotate:55,
     scrub:1.5,
    })  


    gsap.from( ".text-container h1 , .text-container p ", {

      y:40,
      opacity:0,
      stagger:1,
  
     })  
 




  })

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        <FloatingNavbar />

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat">

            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] back" >
            <div className="wrap">
            <div className="box">
              <div className="image">
            <img src={image1} alt="PerceptAI Logo" className="h-10" />

              </div>
              </div>
              <div className="box">
                <img src={image1} alt="Image 1" className="h-10" />
              </div>
              <div className="box">
                <img src={image2} alt="Image 2" className="h-10" />
              </div>
              <div className="box">
                <img src={image3} alt="Image 3" className="h-10" />
              </div>
              <div className="box">
                <img src={image4} alt="Image 4" className="h-10" />
              </div>
            </div>
            </div>

          </div>
        </div>

        {/* Content */}
        <HeroContent />
      </main>
    </div>
  );
};

export default LandingPage;
