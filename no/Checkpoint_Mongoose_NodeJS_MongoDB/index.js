require('dotenv').config();
const mongoose = require('mongoose');
const {connectingdb}  = require('./databse/connectdb');
const Person = require('./models/personSchema');


connectingdb();
// Fonction principale pour gérer toutes les opérations
async function main() {
  try {
    // Créer et sauvegarder un nouvel enregistrement
    const newPerson = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Burgers']
    });
    const savedPerson = await newPerson.save();
    console.log('Personne sauvegardée:', savedPerson);

    // Créer plusieurs personnes avec Model.create()
    const arrayOfPeople = [
      { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
      { name: 'Bob', age: 27, favoriteFoods: ['Pizza', 'Burgers'] }
    ];
    const people = await Person.create(arrayOfPeople);
    console.log('Personnes créées:', people);

    // Recherche de personnes par nom
    const foundPeople = await Person.find({ name: 'John Doe' });
    console.log('Personnes trouvées:', foundPeople);

    // Recherche d'une personne par nourriture favorite
    const personByFood = await Person.findOne({ favoriteFoods: 'Pizza' });
    console.log('Personne trouvée par nourriture favorite:', personByFood);

    // Recherche par ID (remplace 'your-person-id-here' par un vrai ID)
    const personId = '67d6e1011d6efb42540bad7f';
    const personById = await Person.findById(personId);
    console.log('Personne trouvée par ID:', personById);

    // Mise à jour d'une personne avec findOneAndUpdate
    const updatedPerson = await Person.findOneAndUpdate(
      { name: 'John Doe' },
      { age: 20 },
      { new: true }
    );
    console.log('Personne mise à jour:', updatedPerson);

    // Supprimer une personne par ID
    const personIdd = '67d6e1011d6efb42540bad7f';  // ID valide

// Assurez-vous d'utiliser `findByIdAndDelete` au lieu de `findByIdAndRemove`
const removedPerson = await Person.findByIdAndDelete(personIdd);

if (removedPerson) {
  console.log('Personne supprimée:', removedPerson);
} else {
  console.log('Aucune personne trouvée avec cet ID.');}

    // Supprimer plusieurs personnes par nom
    const removeResult = await Person.deleteMany({ name: 'Mary' });
    console.log('Personnes supprimées:', removeResult);

    // Recherche de personnes qui aiment les burritos
    const burritoLovers = await Person.find({ favoriteFoods: 'Burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age'); // Exclure l'âge
    console.log('Amateurs de burritos trouvés:', burritoLovers);

  } catch (err) {
    console.error('Erreur:', err);
  }
}

// Appel de la fonction principale
main();