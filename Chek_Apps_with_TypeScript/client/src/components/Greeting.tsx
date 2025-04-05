// src/components/Greeting.tsx

import React from 'react';

// Définir l'interface pour les props
interface GreetingProps {
  name: string;
}

// Composant fonctionnel Greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
