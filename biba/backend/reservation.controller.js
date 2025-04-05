const Reservation = require('../models/reservation.model');

// Récupérer toutes les réservations
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('serviceId');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations' });
  }
};
