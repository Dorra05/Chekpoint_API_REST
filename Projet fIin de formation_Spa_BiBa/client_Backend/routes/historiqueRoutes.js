const express = require('express');
const router = express.Router();
const Reservation = require('./client_Backend/models/Reservation');

// Historique pour un client donné
router.get('/client/:clientId', async (req, res) => {
  try {
    const historique = await Reservation.find({ client: req.params.clientId });
    res.json(historique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;