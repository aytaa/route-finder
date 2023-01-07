const {createClient} = require('@google/maps');
require('dotenv').config()

// Google Maps API anahtarını buraya yazın
const mapsClient = createClient({key: process.env.API_KEY });

// Rota bulma fonksiyonu
function findRoute(origin, destination, callback) {
    mapsClient.directions({
        origin: origin,
        destination: destination,
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
