const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  client: String,
  chien: String,
  service: String,
  date: Date,
  statut: { type: String, default: "En attente" }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
