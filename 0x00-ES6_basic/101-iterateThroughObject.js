export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  reportWithIterator.forEach((element, idx, array) => {
    if (idx === 0) result = `${element}`;
    else if (idx === array - 1) result = `${result} ${element}`;
    else result = `${result} | ${element}`;
  });
  return result;
}
