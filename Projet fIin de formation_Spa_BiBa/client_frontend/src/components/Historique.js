import React, { useState, useEffect } from 'react';

const Historique = () => {
  const [historique, setHistorique] = useState([]);

  useEffect(() => {
    // Ici, 'client123' devra être remplacé par l'ID du client connecté
    fetch('http://localhost:5000/historique/client/client123')
      .then(response => response.json())
      .then(data => setHistorique(data))
      .catch(error => console.error("Erreur lors du chargement de l'historique:", error));
  }, []);

  return (
    <div>
      <h1>Historique des réservations</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Chien</th>
            <th>Service</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {historique.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>{entry.chien}</td>
              <td>{entry.service}</td>
              <td>{entry.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historique;