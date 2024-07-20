// write a program that will moves all Zeroes to end of an array
// For example -: Input: array = [1,2,0,4,3,0,5,0];
// Output : array = [1, 2, 4, 3, 5, 0, 0, 0];.

let array = [1, 2, 0, 4, 3, 0, 5, 0];
let elem = 0;
let moveElemToEnd = (array, elem) => {
  return [
    ...array.filter((item) => item !== elem),
    ...array.filter((item) => item === elem),
  ];
};
console.log(moveElemToEnd(array, elem));
