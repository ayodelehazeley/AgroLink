export const getWeather = async (location) => {
    const response = await fetch(`/api/weather/${location}`);
    const data = await response.json();
    return data;
};
