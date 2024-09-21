const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('spies', function() {
  it('Verify that the stub is being called with type = SUM, a = 100, and b = 20', function() {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log')
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stub,'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');
    stub.restore();
    spy.restore();
  });
});
