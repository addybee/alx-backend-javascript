const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {

  const params = [
    { a: 1, b: 3, expected: 4 },
    {a: 1, b: 3.7, expected: 5 },
    { a: 1.2, b: 3.7, expected: 5 },
    { a: 1.5, b: 3.7, expected: 6 },
    { a: -2, b: 2.2, expected: 0 },
  ];

  params.forEach(item => {
    it(`should return ${item.expected} when a = ${item.a} and b = ${item.b}`, function() {
      assert.strictEqual(calculateNumber(item.a, item.b), item.expected);
    });
  });
});
