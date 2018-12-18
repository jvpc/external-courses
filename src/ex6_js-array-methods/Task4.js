function filterArr (array, callback) {
  var newArr, i, result;
  newArr = [];
  for (i = 0; i < array.length; i++) {
    result = callback(array[i], i, array);
      if (result === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
module.exports = filterArr;
