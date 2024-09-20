const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

const spy = sinon.spy(Utils, 'calculateNumber');
describe('spies', function() {
  it('validate the usage of the Utils function', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.equal(true);
  });
});