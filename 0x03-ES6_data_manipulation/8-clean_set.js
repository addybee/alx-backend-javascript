export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || startString === '') return '';
  return [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}
