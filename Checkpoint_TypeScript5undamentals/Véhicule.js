// Définition de l'interface Véhicule
interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémentation de la classe Car
  class Car implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémentation de la méthode start
    start(): void {
      console.log('Le moteur de la voiture a démarré');
    }
  }
  
  // Création d'une instance de la classe Car
  const maVoiture = new Car('Toyota', 'Corolla', 2021);
  
  // Appel de la méthode start
  maVoiture.start();  // Affichera "Le moteur de la voiture a démarré"
  