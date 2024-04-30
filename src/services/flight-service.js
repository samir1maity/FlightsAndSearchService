const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            console.log(data)
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            console.log(airplane)
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.Capacity
            })
            return flight;
        } catch (error) {
            console.log('error occur in service layer', error);
        }
    }
}

module.exports = FlightService;