const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'En attente'
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
