// write a program that takes an array and Find Second largest element in an array
// For example -: Input: array = [12, 35, 1, 10, 34, 1]
// Output: The second largest element is 34.

let arr = [12, 35, 1, 10, 34, 1];
let getSecondLargestElem = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
};
console.log(getSecondLargestElem(arr));
