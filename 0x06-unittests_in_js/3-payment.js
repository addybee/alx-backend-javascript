const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  let ans = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${ans}`);
}

module.exports = sendPaymentRequestToApi;
