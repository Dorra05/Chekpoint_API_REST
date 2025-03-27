// Importation des modules nécessaires
const mongoose = require('mongoose');
require('dotenv').config(); // Pour charger les variables d'environnement

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vérification de la connexion
mongoose.connection.once('open', () => {
  console.log('Connexion réussie à la base de données');
});

// Prototype de personne
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Champ obligatoire
  age: Number,
  favoriteFoods: [String], // Tableau de chaînes
});

// Création du modèle Person
const Person = mongoose.model('Person', personSchema);

// Étape 3 : Créer et sauvegarder une personne
const createPerson = (name, age, favoriteFoods) => {
  const person = new Person({ name, age, favoriteFoods });
  person.save((err, data) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement:', err);
    } else {
      console.log('Personne enregistrée:', data);
    }
  });
};

// Exemple d'utilisation
createPerson('John', 30, ['Pizza', 'Burrito']);

// Étape 4 : Créer plusieurs enregistrements
const arrayOfPeople = [
  { name: 'Mary', age: 25, favoriteFoods: ['Sushi'] },
  { name: 'Bob', age: 22, favoriteFoods: ['Tacos'] },
];

Person.create(arrayOfPeople, (err, data) => {
  if (err) {
    console.error('Erreur lors de la création des personnes:', err);
  } else {
    console.log('Personnes créées:', data);
  }
});

// Étape 5 : Rechercher des personnes par nom
const findByName = (name) => {
  Person.find({ name }, (err, data) => {
    if (err) {
      console.error('Erreur lors de la recherche:', err);
    } else {
      console.log('Résultats de la recherche:', data);
    }
  });
};

// Exemple d'utilisation
findByName('John');

// Étape 6 : Trouver une personne avec un aliment préféré
const findByFavoriteFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) {
      console.error('Erreur lors de la recherche:', err);
    } else {
      console.log('Personne trouvée avec l\'aliment préféré:', data);
    }
  });
};

// Exemple d'utilisation
findByFavoriteFood('Burrito');

// Étape 7 : Trouver une personne par ID
const findById = (personId) => {
  Person.findById(personId, (err, data) => {
    if (err) {
      console.error('Erreur lors de la recherche par ID:', err);
    } else {
      console.log('Personne trouvée par ID:', data);
    }
  });
};

// Exemple d'utilisation (remplacez par un ID valide)
findById('votre_id_personne');

// Étape 8 : Mettre à jour une personne
const updateFavoriteFood = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) {
      console.error('Erreur lors de la recherche par ID:', err);
    } else {
      person.favoriteFoods.push('hamburger'); // Ajout d'un aliment préféré
      person.save((err, updatedPerson) => {
        if (err) {
          console.error('Erreur lors de la mise à jour:', err);
        } else {
          console.log('Personne mise à jour:', updatedPerson);
        }
      });
    }
  });
};

// Exemple d'utilisation (remplacez par un ID valide)
updateFavoriteFood('votre_id_personne');

// Étape 9 : Mettre à jour une personne par son nom
const updateAgeByName = (personName) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }, // Renvoyer le document mis à jour
    (err, updatedPerson) => {
      if (err) {
        console.error('Erreur lors de la mise à jour par nom:', err);
      } else {
        console.log('Personne mise à jour par nom:', updatedPerson);
      }
    }
  );
};

// Exemple d'utilisation
updateAgeByName('Mary');

// Étape 10 : Supprimer une personne par ID
const deleteById = (personId) => {
  Person.findByIdAndRemove(personId, (err, deletedPerson) => {
    if (err) {
      console.error('Erreur lors de la suppression par ID:', err);
    } else {
      console.log('Personne supprimée:', deletedPerson);
    }
  });
};

// Exemple d'utilisation (remplacez par un ID valide)
deleteById('votre_id_personne');

// Étape 11 : Supprimer toutes les personnes avec le nom "Mary"
const deleteByName = (name) => {
  Person.remove({ name }, (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression:', err);
    } else {
      console.log('Nombre de personnes supprimées:', result.deletedCount);
    }
  });
};

// Exemple d'utilisation
deleteByName('Mary');

// Étape 12 : Chercher des personnes qui aiment les burritos
const findPeopleWhoLikeBurritos = () => {
  Person.find({ favoriteFoods: 'Burrito' })
    .sort({ name: 1 }) // Tri par nom
    .limit(2) // Limite à 2 résultats
    .select('-age') // Masque l'âge
    .exec((err, data) => {
      if (err) {
        console.error('Erreur lors de la recherche:', err);
      } else {
        console.log('Personnes qui aiment les burritos:', data);
      }
    });
};

// Exemple d'utilisation
findPeopleWhoLikeBurritos();