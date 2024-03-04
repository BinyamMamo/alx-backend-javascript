export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    if (result !== '') {
      result += ' | ';
    }
    result += item;
  }
  return result;
}
