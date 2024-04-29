const { CityRepository } = require('../repository/index')


class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const City = await this.cityRepository.createCity(data);
            return City;
        } catch (error) {
            console.log('error occur in service layer', error)
        }

    }

    async deleteCity(cityId) {
        try {
            const City = await this.cityRepository.deleteCity(cityId)
            return true;
        } catch (error) {
            console.log('error occur in service layer', error)
        }

    }

    async updateCity(data,cityId) {
        try {
            await this.cityRepository.updateCity(data, cityId)
        } catch (error) {
            console.log('error occur in service layer', error)
        }

    }

    async getCity(cityId) {
        try {
            const City = await this.cityRepository.getCity(cityId)
            return City;
        } catch (error) {
            console.log('error occur in service layer', error)
        }

    }

    async getAllCity() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = CityService;