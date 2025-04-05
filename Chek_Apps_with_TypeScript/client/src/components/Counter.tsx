// src/components/Counter.tsx

import React, { Component } from 'react';

// Définition du type de l'état
interface CounterState {
  count: number;
}

// Définition des props, ici il n'y en a pas donc on laisse vide
interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état
  state: CounterState = { count: 0 };

  // Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
