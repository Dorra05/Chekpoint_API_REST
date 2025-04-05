const express = require('express');
const router = express.Router();
const Reservation = require('/client_Backend/models/Reservation');

// Ajouter une réservation
router.post('/ajouter', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Récupérer toutes les réservations (avec infos du client)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('client');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;