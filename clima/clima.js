const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0602dce8466d4469ad3b6aff83dac9e1&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}