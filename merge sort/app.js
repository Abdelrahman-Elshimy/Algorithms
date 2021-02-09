// function recursiveMerge(arr, arr2) {
//   let newArray = [];
//   let len = arr.length + arr2.length;
//   let first = 0;
//   let second = 0;
//   for (let index = 0; index < len; index++) {
//     if (arr[first] > arr2[second]) {
//       if (!arr[second]) {
//         newArray.push(arr[first]);
//         first++;
//       } else {
//         newArray.push(arr2[second]);
//         second++;
//       }
//     } else {
//       if (!arr[first]) {
//         newArray.push(arr2[second]);
//         second++;
//       } else {
//         newArray.push(arr[first]);
//         first++;
//       }
//     }
//   }
//   return newArray;
// }
// console.log(recursiveMerge([2, 54], [34, 35]));

// arr = [32, 23, 45, 5, 1, 334, 56, 76, 23, 76, 334];
// rightLength = 0;
// leftLength = 0;
// function devideArrayIntoTwo(array) {
//   leftArray = array.slice(0, Math.ceil((array.length - 1) / 2));
//   if (leftArray.length > 1) {
//     devideArrayIntoTwo(leftArray);
//   }
//   rightArray = array.slice(Math.ceil(array.length / 2 + 1), array.length - 1);
// }
arr = [32, 23, 45, 5, 1, 334, 56, 76, 23, 76, 334];
function mergeSort(array) {
  if (array.length > 1) {
    r = Math.ceil(array.length / 2);
    L = array.slice(0, r);
    M = array.slice(r, array.length);

    mergeSort(L);
    mergeSort(M);
    i = 0;
    j = 0;
    k = 0;

    while (i < L.length && j < M.length) {
      if (L[i] < M[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = M[j];
        j++;
      }
      k++;
    }
    while (i < L.length) {
      array[k] = L[i];
      i += 1;
      k += 1;
    }

    while (j < M.length) {
      array[k] = M[j];
      j += 1;
      k += 1;
    }
  }
  return array;
}

console.log(mergeSort(arr));
