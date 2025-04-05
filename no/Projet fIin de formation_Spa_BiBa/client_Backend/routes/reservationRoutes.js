const express = require('express');
const router = express.Router();
const Reservation = require('./client_Backend/models/Reservation');

router.post('/ajouter', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
});

module.exports = router;
