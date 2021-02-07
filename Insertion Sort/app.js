// list divided part sorted and part not sorted
// O(n^2)

// !disadvantages
// shift
var arr = [9, 23, 3, 4, 23, 65, 34, 32];
function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}
console.log(insertionSort(arr));
