const myLibrary = require('./index');

myLibrary.findRoute('New York', 'Los Angeles', (route) => {
    console.log(route);
});
