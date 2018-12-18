function mapArr (array, callback) {
  var newArr,i;
  newArr = [];
  for (i = 0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
  }
  return newArr;
};
module.exports = mapArr;
