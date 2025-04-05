const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.use('/reservations', require('./routes/reservationRoutes'));
app.use('/paiements', require('./routes/paiementRoutes'));
app.use('/historique', require('./routes/historiqueRoutes'));
app.use('/auth', require('./routes/authRoutes'));

app.listen(5000, () => console.log('🚀 Serveur sur http://localhost:5000'));