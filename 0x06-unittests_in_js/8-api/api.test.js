const { expect } = require("chai")
const request = require("request")

describe('index page', function() {
  it('should return 200 status code, message: Welcome to the payment system', function(done) {
    request('http://localhost:7865', function name(error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});
