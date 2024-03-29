export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';
  let result = '';
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    } else {
      result += '';
    }
  }
  return result.slice(0, -1);
}
