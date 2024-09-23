import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Sidebar() {

  useGSAP(() => {

    const ts1= gsap.timeline({
      scrollTrigger: {
        trigger: ".root",
        start: "top 0",
        end: "bottom 100%",
        scrub: 2,
        markers: true,

      }
    })


    ts1.fromTo(".tt ", {
      y: 0,
    }, {
      y: 600, duration: 1, 
    })




  })



  return (
    <div className="w-1/5 bg-gray-100 p-4 rounded-md shadow-md h-full side tt">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {/* Add sidebar content here */}
      <p>the sidebar content.</p>
      {/* Example navigation */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <li><a href="#projects" className="text-sm hover:bg-gray-200 p-2 block rounded">Category 1</a></li>
          <li><a href="#about" className="text-sm hover:bg-gray-200 p-2 block rounded">Category 2</a></li>
          <li><a href="#contact" className="text-sm hover:bg-gray-200 p-2 block rounded">Category 3</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
