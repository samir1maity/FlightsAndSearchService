const express = require('express');
const CityController = require('../../controllers/city-Controller')
const FlightController = require('../../controllers/flight-controller')
const AirplaneController = require('../../controllers/airplane-Controller')


const router = express.Router();

router.post('/city', CityController.create)
router.get('/city/:id', CityController.get)
router.get('/city', CityController.getAll)
router.patch('/city/:id', CityController.update)
router.delete('/city/:id', CityController.destroy)

router.post('/flights', FlightController.create)

router.get('/airplane/:id',AirplaneController.get)

module.exports = router;