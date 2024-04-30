const { FlightService } = require('../services/index')

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body)
        return res.status(201).json({
            success: true,
            data: flight,
            message: 'successfully created a flight',
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
    create,
}