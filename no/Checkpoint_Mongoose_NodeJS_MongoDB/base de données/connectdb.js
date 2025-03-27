const mongoose = require('mongoose');

// Fonction de connexion à la base de données
const connectingdb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log('Connexion à MongoDB réussie !');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err);
  }
};

module.exports = { connectingdb };