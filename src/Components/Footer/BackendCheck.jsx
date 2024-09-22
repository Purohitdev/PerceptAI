
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BackendCheck = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://perceptai-backend.onrender.com/');
                setProjects(response.data.projects);
            } catch (err) {
                setError('Error fetching projects');
                console.error(err);
            }
        };

        fetchProjects();
    }, []);

    const runProject = async (projectName) => {
        try {
            const response = await axios.get(`https://perceptai-backend.onrender.com/run/${projectName}`);
            alert(response.data.message);
        } catch (err) {
            alert(`Failed to run project: ${err.response?.data.error || err.message}`);
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderTop: '1px solid #ccc' }}>
            <h1 style={{ fontSize: '24px', color: '#333' }}>Project List</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {projects.map((project) => (
                    <li key={project} style={{ marginBottom: '10px' }}>
                        <span style={{ fontSize: '18px', color: '#555' }}>{project}</span>
                        <button
                            onClick={() => runProject(project)}
                            style={{
                                marginLeft: '10px',
                                padding: '8px 12px',
                                backgroundColor: '#007BFF',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Run
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BackendCheck;
