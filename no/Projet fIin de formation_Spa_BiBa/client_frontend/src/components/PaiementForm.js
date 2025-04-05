import React, { useState } from 'react';

const PaiementForm = () => {
  const [client, setClient] = useState('');
  const [montant, setMontant] = useState('');
  const [methode, setMethode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paiement = { client, montant, methode };

    const response = await fetch('http://localhost:5000/paiements/payer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paiement),
    });

    alert("Paiement effectué !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom du client" onChange={(e) => setClient(e.target.value)} />
      <input type="number" placeholder="Montant" onChange={(e) => setMontant(e.target.value)} />
      <select onChange={(e) => setMethode(e.target.value)}>
        <option value="Carte bancaire">Carte bancaire</option>
        <option value="Paypal">Paypal</option>
      </select>
      <button type="submit">Payer</button>
    </form>
  );
};

export default PaiementForm;
