const { AirplaneRepository } = require('../repository/index')

class AirplaneService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async getAirplane(id) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log('error occur in service airplane', error)
        }

    }

}

module.exports = AirplaneService;