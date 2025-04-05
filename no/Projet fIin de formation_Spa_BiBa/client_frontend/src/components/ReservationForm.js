import React, { useState } from 'react';

const ReservationForm = () => {
  const [client, setClient] = useState('');
  const [chien, setChien] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = { client, chien, service, date };

    const response = await fetch('http://localhost:5000/reservations/ajouter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    });

    alert("Réservation ajoutée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom du client" onChange={(e) => setClient(e.target.value)} />
      <input type="text" placeholder="Nom du chien" onChange={(e) => setChien(e.target.value)} />
      <input type="text" placeholder="Service" onChange={(e) => setService(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Réserver</button>
    </form>
  );
};

export default ReservationForm;
