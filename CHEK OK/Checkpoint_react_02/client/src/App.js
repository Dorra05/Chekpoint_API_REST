// src/App.js
import React from 'react';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;