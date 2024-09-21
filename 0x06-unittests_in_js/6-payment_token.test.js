const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function() {
  it('should test async function with done', function(done) {
    getPaymentTokenFromAPI(true)
      .then(((resp) => {
        expect(resp).to.be.an('object').to.have.all.keys(['data']);
        done();
      }));
  });
});