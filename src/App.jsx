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
        const response = await axios.get('https://perceptai-backend.onrender.com/'); // Update with your backend URL
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

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Available Projects</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map((project) => (
          <li key={project} style={{ margin: '10px 0' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{project}</span>
            <button
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onClick={() => runProject(project)}
            >
              Run
            </button>
          </li>
        ))}
      </ul>

      <h2>Camera Feed</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '600px' }}></video>
      <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480"></canvas>
      <button
        onClick={runInference}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Run Inference
      </button>
    </div>
  );
};

export default App;
