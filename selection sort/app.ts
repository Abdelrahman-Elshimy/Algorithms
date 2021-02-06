// Selection Sort
// ? O(n^2)
// ! Slow
/**  > Disadvantages
 ** 1- Slow Because is loaping all array many times
 ** 2- O(n^2)
 ** 3- if already sorted it still sort
 **/
/**  ? Advantages
 ** 1- if we need sort fixed top
 ** 2- if we have small array
 ** 3- very simple
 ** 4- Memory
 **/
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
