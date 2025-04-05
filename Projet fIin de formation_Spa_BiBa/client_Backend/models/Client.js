const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  nom: String,
  email: String,
  motDePasse: String, // authentification
  role: { type: String, default: "client" } // "admin"
});

module.exports = mongoose.model('Client', ClientSchema);