const locationRouteLibrary = require('./index');

// Google Maps API anahtarını değişkenden alın
const apiKey = process.env.API_KEY;

locationRouteLibrary.findRoute('New York', 'Los Angeles', apiKey, (route) => {
    console.log(route);
});
