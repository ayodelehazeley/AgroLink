const axios = require('axios');

const getWeather = async (req, res) => {
    const location = req.params.location;
    const apiKey = 'YOUR_WEATHER_API_KEY';
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving weather data');
    }
};

module.exports = { getWeather };
