import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Récupérer les réservations depuis l'API
    axios.get('/api/reservations')
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Mes Réservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Date</th>
            <th scope="col">Statut</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>{reservation.serviceId.name}</td>
              <td>{new Date(reservation.date).toLocaleDateString()}</td>
              <td>{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
