import React, { useState, useEffect } from 'react';

const ReservationForm = () => {
  const [clientId, setClientId] = useState('');
  const [clients, setClients] = useState([]);
  const [chien, setChien] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Appeler l'API pour récupérer la liste des clients
    fetch('http://localhost:5000/auth/clients')  // Vous devrez créer cette route ou adapter selon votre API
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(error => console.error("Erreur lors de la récupération des clients:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = { client: clientId, chien, service, date };

    const response = await fetch('http://localhost:5000/reservations/ajouter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    });

    if (response.ok) {
      alert("Réservation ajoutée !");
    } else {
      alert("Erreur lors de la réservation");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Client :</label>
      <select value={clientId} onChange={(e) => setClientId(e.target.value)}>
        <option value="">Sélectionnez un client</option>
        {clients.map(client => (
          <option key={client._id} value={client._id}>{client.nom}</option>
        ))}
      </select>
      <input type="text" placeholder="Nom du chien" onChange={(e) => setChien(e.target.value)} />
      <input type="text" placeholder="Service" onChange={(e) => setService(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Réserver</button>
    </form>
  );
};

export default ReservationForm;