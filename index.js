const {createClient} = require('@google/maps');
require('dotenv').config()

// Google Maps API anahtarını değişkenden alın
const apiKey = process.env.API_KEY;

// Google Maps API client'ı oluşturun
const mapsClient = createClient({ key: apiKey });

// Rota bulma fonksiyonu değişti.
function findRoute(origin, destination, apiKey, callback) {
    mapsClient.directions({
        origin: origin,
        destination: destination,
        traffic_model: 'pessimistic',
        departure_time: 'now',
    }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        // Rota bilgilerini döndürür
        callback(response.json.routes[0]);
    });
}

module.exports = {
    findRoute: findRoute
};
