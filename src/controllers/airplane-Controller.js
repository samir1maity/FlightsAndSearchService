const { AirplaneService } = require('../services/index')

const airplaneService = new AirplaneService();

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id)
        return res.status(201).json({
            success: true,
            data: airplane,
            message: 'successfully fetched a airplane',
            error: {},
        })
    } catch (error) {
        console.log('error occurred in controller layer', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: {},
            message: 'Not able to create a flight'
        })

    }
}

module.exports = {
    get,
}