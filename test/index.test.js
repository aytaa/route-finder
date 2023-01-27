/* test/test.js */
const route = require('../index');
const expect = require('chai').expect;

describe('#route()',  () => {
    context('with destinations',  () => {
        it('should compute route',  (done) => {
            route.findRoute('Samsun', 'İstanbul', process.env.API_KEY, (route) => {
                console.log('Datas => ',route.legs)
                expect(route).to.include.all.keys('copyrights', 'overview_polyline', 'bounds');
                done();
            });
        })
    });
})
