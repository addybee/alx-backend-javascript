const { expect } = require('chai');;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function() {
  const params = [
    { type: 'SUM', a: 1.4, b: 4.5, expected: 6 },
    { type: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4 },
    { type: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2 },
    { type: 'DIVIDE', a: 1.4, b: 0, expected: 'Error' },
    { type: 'SUBTRACT', a: -2, b: 2.2, expected: -4 },
    { type: 'MULTIPLY', a: -2, b: 2.2, expected: undefined },
  ];

  params.forEach(item => {
    it(`chai should return ${item.expected} when type = ${item.type}, a = ${item.a} and b = ${item.b}`, function() {
      expect(calculateNumber(item.type, item.a, item.b)).to.equal(item.expected);
    });
  });
});
