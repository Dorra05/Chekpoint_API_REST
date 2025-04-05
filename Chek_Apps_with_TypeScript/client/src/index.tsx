import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct pour React 18 et plus récent
import './index.css';  // Si vous avez des styles globaux, assurez-vous que ce fichier existe
import App from './App';  // Le composant principal de votre application
import reportWebVitals from './reportWebVitals';  // Si vous souhaitez mesurer la performance

// Créer le point d'entrée pour rendre l'application React
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);  // Assurez-vous que 'root' existe dans votre HTML
root.render(
  <React.StrictMode>
    <App />  {/* Votre composant principal */}
  </React.StrictMode>
);

// Si vous souhaitez mesurer la performance, passez une fonction à reportWebVitals (exemple : console.log)
reportWebVitals();
