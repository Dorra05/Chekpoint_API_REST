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
[
  {
    clientId: '12345',
    serviceId: 'Toilettage',
    date: '2025-04-10',
    status: 'Confirmée'
  },
  {
    clientId: '67890',
    serviceId: 'Promenade',
    date: '2025-04-12',
    status: 'En attente'
  },
  {
    clientId: '11223',
    serviceId: 'Dîner',
    date: '2025-04-15',
    status: 'Confirmée'
  }
]

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
