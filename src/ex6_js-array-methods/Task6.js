function reduceArr(arr, callback, initialValue) {
  var i, previousValue;
  if (typeof(initialValue) === 'undefined') {
    previousValue = arr[0];
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }
  for (i; i<arr.length; i++) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }
  return previousValue;
}
module.exports = reduceArr;
