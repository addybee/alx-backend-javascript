const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('spies', function() {
  it('validate the usage of the Utils function with args', function() {
    let spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.equal(true);
    spy.restore();
  });
});
