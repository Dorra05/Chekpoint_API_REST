const mongoose = require('mongoose');

const PaiementSchema = new mongoose.Schema({
  client: String,
  montant: Number,
  methode: String,
  statut: { type: String, default: "En attente" }
});

module.exports = mongoose.model('Paiement', PaiementSchema);
