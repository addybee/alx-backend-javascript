const { expect } = require("chai")
const request = require("request")

describe('index page', function () {
  it('should return 200 status code, message: Welcome to the payment system', function (done) {
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

describe('cart page', function () {
  it('should return the correct status code when :id is not a number', function (done) {
    request('http://localhost:7865/cart/view', function name(error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('should return the correct status code when :id is a number', function (done) {
    request('http://localhost:7865/cart/50', function name(error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart :50');
        done();
      }
    });
  });

  
  it('should return the correct status code when :id is absent', function (done) {
    request('http://localhost:7865/cart/', function name(error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });
});
