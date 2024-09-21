function calculateNumber(type, a, b) {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);  
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) !== 0) {
        return Math.round(a) / Math.round(b);
      } else {
        return 'Error';
      }
    default:
      break;
  }
}

module.exports = calculateNumber;
