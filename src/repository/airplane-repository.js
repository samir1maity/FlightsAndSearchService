const { Airplane } = require('../models/index')

class AirplaneRepository {

async getAirplane (id) {
    try {
        const airplane = await Airplane.findByPk(id);
        console.log(airplane)
        return airplane;
    } catch (error) {
        console.log('error occur in repository layer in airplane',error)
    }
}

}

module.exports = AirplaneRepository;


{/*
  async getCity(cityId) {
    try {
      const City = await city.findByPk(cityId)
      return City;
    } catch (error) {
      console.log('error occur in repository layer')

    }
  }
*/}