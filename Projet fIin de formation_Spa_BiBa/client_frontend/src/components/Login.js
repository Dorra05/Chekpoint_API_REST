import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, motDePasse }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Connexion réussie !");
      // Sauvegarder le token ou rediriger l'utilisateur selon le rôle
    } else {
      alert(data.message || "Erreur lors de la connexion");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Connexion</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setMotDePasse(e.target.value)} />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;