function findMaxNumber(arr) {
  let length = arr.length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;
