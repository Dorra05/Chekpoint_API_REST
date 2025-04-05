const express = require('express');
const router = express.Router();
const serviceController = require('./controllers/service.controller');
const reservationController = require('./controllers/reservation.controller');

router.get('/api/services', serviceController.getServices);
router.get('/api/reservations', reservationController.getReservations);

module.exports = router;
