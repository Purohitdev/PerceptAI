import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching the project list from Flask backend
    axios.get('http://localhost:5000/')
      .then(response => {
        setProjects(response.data.projects);  // Set the projects in state
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  // Function to run a project when the button is clicked
  const runProject = (projectName) => {
    axios.get(`http://localhost:5000/run/${projectName}`)  // Flask endpoint for running projects
      .then(response => {
        alert(response.data.message || 'Success!');  // Display success message
      })
      .catch(error => {
        alert('There was an error running the project!');  // Handle errors
        console.error('Error running the project!', error);
      });
  };

  return (
    <div className="App">
      <h1>Project List</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project} 
            <button onClick={() => runProject(project)} style={{ marginLeft: '10px' }}>
              Run
            </button>  {/* Button to run the project */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
