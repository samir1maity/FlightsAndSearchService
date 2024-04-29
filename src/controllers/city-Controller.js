const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {

    try {
        const response = await cityService.createCity(req.body)
        return res.status(201).json({
            success: true,
            data: response,
            message: 'A city successfully created',
            error: {}
        })
    } catch (error) {
        console.log('error occurred in controller layer', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: {},
            message: 'Not able to create a city'
        })
    }

}
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            message: 'Successfully deleted a city',
            success: true,
            data: response,
            error: {}
        })
    } catch (error) {
        console.log('error occurred in controller layer', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: {},
            message: 'Not able to delete a city'
        })
    }
}


const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.body, req.params.id)
        return res.status(200).json({
            data: response,
            error: {},
            message: 'Successfully updated a city',
            success: true
        })
    } catch (error) {
        console.log('error occurred in controller layer', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: {},
            message: 'Not able to update a city'
        })
    }
}


const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
            success: true,
            data: response,
            message: 'succesfully fetched a city'
        })
    } catch (error) {
        console.log('error occurred in controller layer', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: {},
            message: 'Not able to fetched a city'
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}