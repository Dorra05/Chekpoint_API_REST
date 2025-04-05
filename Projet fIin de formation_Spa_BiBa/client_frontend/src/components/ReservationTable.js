import React, { useState, useEffect } from 'react';

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reservations')
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(error => console.error("Erreur lors de la récupération des réservations:", error));
  }, []);

  return (
    <div>
      <h2>Tableau des Réservations</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Chien</th>
            <th>Service</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res, index) => (
            <tr key={index}>
              <td>{new Date(res.date).toLocaleDateString()}</td>
              <td>{res.client ? res.client.nom : "N/A"}</td>
              <td>{res.chien}</td>
              <td>{res.service}</td>
              <td>{res.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/reservation/form">Ajouter une réservation</a>
    </div>
  );
};

export default ReservationTable;