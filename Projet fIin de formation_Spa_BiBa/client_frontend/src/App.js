import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReservationForm from './components/ReservationForm';
import ReservationTable from './components/ReservationTable';
import PaiementForm from './components/PaiementForm';
import Historique from './components/Historique';
import AdminPage from './components/AdminPage';
import Login from './components/Login';

const Services = () => <h1>Liste des services</h1>;
const Contact = () => <h1>Contactez-nous</h1>;
const Accueil = () => <p>Bienvenue au BiBa SPA pour chiens ! Nous sommes ravis de vous accueillir dans notre centre de bien-être dédié à vos compagnons à quatre pattes. Ici, nous offrons une expérience relaxante et revitalisante pour votre chien, avec des soins adaptés à ses besoins. N'hésitez pas à nous faire part de vos attentes, nous sommes là pour vous et votre fidèle ami !</p>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservations" element={<ReservationTable />} />
        <Route path="/reservation/form" element={<ReservationForm />} />
        <Route path="/paiements" element={<PaiementForm />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;