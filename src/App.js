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

  // to run a project
  const runProject = (projectName) => {
    axios.get(`http://localhost:5000/run/${projectName}`)  
      .then(response => {
        alert(response.data.message || 'Success!');  
      })
      .catch(error => {
        alert('There was an error running the project!');  // error handling
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
            </button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
