function someArr (array, callback) {
  var i, result;
  for (i = 0; i < array.length; i++) {
    result = callback(array[i], i, array);
    if (result) break;
  }
  return result;
};
module.exports = someArr;
