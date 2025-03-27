// src/App.js
import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Remplacez par votre prénom ou laissez vide pour tester l'affichage par défaut

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      
      {/* Message personnalisé */}
      <p>Bonjour {firstName ? firstName : "!"}</p>

      {/* Si le prénom est fourni, afficher une image (vous pouvez remplacer l'URL par celle de votre choix) */}
      {firstName && <img src="https://avatars.githubusercontent.com/u/189655477?s=400&u=4e1d4df7ed0d6f88ac0d7c34fb5f7f7d6fdaaa93&v=4" alt="Profile" style={{ width: '100px', height: 'auto' }} />}
    </div>
  );
};

export default App;
