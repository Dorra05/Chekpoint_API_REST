const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Connexion (login)
router.post('/login', async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    const client = await Client.findOne({ email, motDePasse });
    if (client) {
      // Ici, vous pourriez générer un token JWT
      res.json({ message: "Connexion réussie", client });
    } else {
      res.status(401).json({ message: "Identifiants invalides" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
