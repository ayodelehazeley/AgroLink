import React, { useState } from 'react';
import { getWeather } from '../services/weatherService';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        const data = await getWeather(location);
        setWeather(data);
    };

    return (
        <div>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
            />
            <button onClick={handleSearch}>Get Weather</button>
            {weather && (
                <div>
                    <h2>Weather in {weather.location.name}</h2>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
