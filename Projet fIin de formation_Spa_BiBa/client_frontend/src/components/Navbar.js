import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/reservations">Réservations</Link></li>
        <li><Link to="/paiements">Paiements</Link></li>
        <li><Link to="/historique">Historique</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;