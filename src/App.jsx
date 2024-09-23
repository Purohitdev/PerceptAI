<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// Uncomment the following line if using TensorFlow.js or another client-side library
// import * as tf from '@tensorflow/tfjs'; 

const App = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of projects from the backend
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://perceptai-backend.onrender.com'); // Update with your backend URL
        setProjects(response.data.projects);
      } catch (err) {
        setError('Error fetching projects');
        console.error(err);
      }
    };

    fetchProjects();

    // Set up the camera
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    setupCamera();
  }, []);

  const runProject = async (projectName) => {
    try {
      const response = await axios.get(`https://perceptai-backend.onrender.com/run/${projectName}`); // Update with your backend URL
      alert(response.data.message);
    } catch (err) {
      alert(`Failed to run project: ${err.response?.data.error || err.message}`);
    }
  };

  const runInference = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw the current video frame onto the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Example: Run inference using TensorFlow.js (customize this section)
    // const imageTensor = tf.browser.fromPixels(canvas);
    // console.log('Running inference on the captured frame');
    // imageTensor.print();  // Display tensor details in the console

    // Cleanup (if needed)
    // imageTensor.dispose();
  };
=======
=======
>>>>>>> parent of 3c3362b (client side test)
=======
>>>>>>> parent of 3c3362b (client side test)
import LandingPage from './Components/Section1/Hero/Hero';
import React from 'react';
import './App.css'
import Section2 from './Components/Section2/Section2';
import AnimatedNewsletter from './Components/Extras/Newsletter';
import BackendCheck from './Components/Footer/BackendCheck';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 3c3362b (client side test)
=======
>>>>>>> parent of 3c3362b (client side test)
=======
>>>>>>> parent of 3c3362b (client side test)

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
