const { city } = require("../models/index");

class cityRepository {

  async createCity({ name }) {
    try {
      const City = await city.create({ name });
      return City;
    } catch (error) {
      console.log('error occur in repository layer')
    }
  }

  async deleteCity(cityId) {
    try {
      await city.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log('error occur in repository layer')
    }
  }


  async updateCity(data, cityId) {
    try {
      const City = await city.update(data, {
        where: {
          id: cityId
        }
      })
      return City;
    } catch (error) {
      console.log('error occur in repository layer')
    }
  }

  async getCity(cityId) {
    try {
      const City = city.findByPk(cityId)
      return City;
    } catch (error) {
      console.log('error occur in repository layer')

    }
  }

}

module.exports = cityRepository;