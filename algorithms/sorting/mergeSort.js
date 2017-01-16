var merge = function(left, right) {
  var sortedArray = [];
  while (left[0] > 0 && right[0]) {
    var l = left[0];
    var r = right[0];
    if (l < r) {
      sortedArray.push(l);
      left.shift();
    } else {
      sortedArray.push(r);
      right.shift();
    }
  }
  return sortedArray;
}

var mergeSort = function(array) {
  if (array.length < 2) return array;
  var length = Math.floor(array.length / 2);
  var left = array.slice(0, length);
  var right = array.slice(length);
  var mLeft = mergeSort(left);
  var mRight = mergeSort(right);
  console.log(mLeft)
  return merge(mLeft, mRight);
}
var greaterThan = function(a, b) {
  return a < b;
}
console.log(mergeSort([20, 23, 40, 1, 30, 20]));
