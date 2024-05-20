const axios = require('axios');

const getMarketData = async (req, res) => {
    const crop = req.params.crop;
    const apiKey = 'YOUR_MARKET_API_KEY';
    try {
        const response = await axios.get(`http://api.marketapi.com/v1/market_data?key=${apiKey}&crop=${crop}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving market data');
    }
};

module.exports = { getMarketData };
