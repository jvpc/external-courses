function everyArr (array, callback) {
  var i, result;
  for (i = 0; i < array.length; i++) {
    result = callback(array[i], i, array);
    if (result !== true) break;
  }
  return result;
};
module.exports = everyArr;
