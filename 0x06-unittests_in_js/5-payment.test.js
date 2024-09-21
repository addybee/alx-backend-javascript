const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Hooks', function() {
  describe('call sendPaymentRequestToAPI with 100, and 20', function() {
    let spy;
    beforeEach(function () {
      // Runs before each test in this block
      spy = sinon.spy(console, 'log');
    });
  
    afterEach(function () {
      // Runs after each test in this block
      spy.restore();
    });
  
    it('should call console log once and with The total is: 120', function() {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWith(spy, 'The total is: 120');
      sinon.assert.calledOnce(spy);

    });
  });

  describe('call sendPaymentRequestToAPI with 10, and 10', function() {
    let spy;
    beforeEach(function () {
      // Runs before each test in this block
      spy = sinon.spy(console, 'log');
    });
  
    afterEach(function () {
      // Runs after each test in this block
      spy.restore();
    });
  
    it('should call console log once and with The total is: 20', function() {
      sendPaymentRequestToApi(10, 10);
      sinon.assert.calledWith(spy, 'The total is: 20');
      sinon.assert.calledOnce(spy);
    });
  })
});
