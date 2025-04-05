import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReservationForm from './components/ReservationForm';
import PaiementForm from './components/PaiementForm';

// Composants simples pour Services et Contact
const Services = () => <h1>Liste des services</h1>;
const Contact = () => <h1>Contactez-nous</h1>;
const Accueil = () => <h1>Bienvenue au SPA pour chiens</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservations" element={<ReservationForm />} />
        <Route path="/paiements" element={<PaiementForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
