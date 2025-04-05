const express = require('express');
const router = express.Router();
const Paiement = require('./client_Backend/models/Paiement');

router.post('/payer', async (req, res) => {
  try {
    const paiement = new Paiement(req.body);
    await paiement.save();
    res.status(201).json(paiement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
