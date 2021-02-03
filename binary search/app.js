// --------------------------------------------------------------- Binary Search -----------------------------------------------------------//
// ! Array must sorted
// ? O(n) == log^2(n)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var start = 0;
var last = arr.length - 1;
var middle = (last - start) / 2 + start;
function search(num) {
  // Make vars Int
  middle = Math.ceil(middle);
  start = Math.ceil(start);
  last = Math.ceil(last);
  console.log(middle, start, last);
  if (num == arr[middle]) {
    console.log("middle directly");
    console.log("The Index", arr.indexOf(num));
    return num;
  } else if (num > arr[middle]) {
    console.log("middle >");
    start = middle + 1;
    middle = (last - start) / 2 + start;
    last = last;
    search(num);
  } else if (num < arr[middle]) {
    console.log("middle <");
    start = 0;
    last = middle - 1;
    middle = (last - start) / 2 + start;
    search(num);
  }
}
search(1);
