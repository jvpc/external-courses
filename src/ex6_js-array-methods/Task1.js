function sliceArr (arr, num1, num2) {
  var i, newArr;
  newArr = [];
  if (num1 === undefined && num2 === undefined) {
    for (i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  } else if (num2 === undefined && num1 > 0) {
    for (i = num1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  } else if (num1 < 0 && num2 === undefined) {
    for (i = (num1 + arr.length); i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }else if (num1 < 0 && num2 < 0) {
    for (i = (num1 + arr.length); i < (num2 + arr.length); i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  for (i = num1; i < num2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
module.exports = sliceArr;
