// src/components/IncidentPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IncidentPage = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('/api/incidents')
      .then(response => {
        setIncidents(response.data);
      })
      .catch(error => {
        console.error('Error fetching incidents:', error);
      });
  }, []);

  return (
    <div>
      <h2>Incident Management Page</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.incidentId}>
            <h3>{incident.identifier}</h3>
            <p>Priority: {incident.incidentPriority}</p>
            <p>Status: {incident.incidentStatus}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentPage;
