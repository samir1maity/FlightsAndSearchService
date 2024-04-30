const { Flight } = require('../models/index')

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log('error occur in repository layer flight',error)
        }
    }
}

module.exports = FlightRepository;
