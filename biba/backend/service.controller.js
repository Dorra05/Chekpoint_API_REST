const Service = require('../models/service.model');

// Récupérer tous les services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des services' });
  }
};
