/**
 * sorts an array based on the outcome of a compare operator function
 * params {Array} array to sort
 * params {Function} comparison operator function
 */
function insertionSort(array, compare) {
  for (var i = 0; i < array.length; i++) {
    var elementToSort = array[i];
    for (var j = i -1; j >= 0; j--) {
      var sortedElement = array[j];
      if (compare(sortedElement, elementToSort)) {
        array[j] = elementToSort;
        array[j+1] = sortedElement;
      }
    }
  }
  return array;
}
