// Selection Sort
// ? O(n^2)
// ! Slow
var arr = [4, 300, 42, 54, 11, 76];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = arr[i];
    for (let index = i; index < arr.length; index++) {
      if (min > arr[index + 1]) {
        let high = min;
        min = arr[index + 1];
        arr[index + 1] = high;
      }
    }
    arr[i] = min;
  }
  return arr;
}

const newArr = selectionSort(arr);
console.log(newArr);
