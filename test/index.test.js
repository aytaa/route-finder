/* test/test.js */
const route = require('../index');
const expect = require('chai').expect;

describe('#route()', function () {
    context('with destinations', function () {
        it('should compute route', function (done) {
            route.findRoute('New York', 'Los Angeles', process.env.API_KEY, (route) => {
                console.log('Datas => ',route)
                expect(route).to.include.all.keys('copyrights', 'overview_polyline', 'bounds');
                done();
            });
        })
    });
})
