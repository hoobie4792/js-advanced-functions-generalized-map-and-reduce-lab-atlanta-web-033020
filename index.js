// Add your functions here
function map(sourceArray, fn) {
  const result = [];
  for (const element of sourceArray) {
    result.push(fn(element));
  }
  return result;
}

function reduce(sourceArray, fn, startingPoint) {
  let total = !!startingPoint ? startingPoint : sourceArray[0];
  const startIndex = !!startingPoint ? 0 : 1;

  for (let i = startIndex; i < sourceArray.length; i++) {
    total = fn(sourceArray[i], total);
  }
  return total
}