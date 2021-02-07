// ! O(n^2) less
// ? addvatages
// simple array
// if we need specific limit smallest we needn't to sort all array
// we needn't more memory we modify the array we want
// more smart than selection we needn't to sort if array is sorted
// ! disadvantages
// O(n^2)
// for simple array
// slow

var array = [3, 5, 2, 6, 8, 9];
for (var i = 0; i < array.length; i++) {
  for (var index = array.length - 1; index >= i; index--) {
    var min = array[index];
    var count = 0;
    if (array[index] < array[index - 1]) {
      var mid = array[index - 1];
      array[index - 1] = min;
      array[index] = mid;
      count++;
    }
  }
  if (count == 0) {
    i = array.length;
  }
}
console.log(array);
