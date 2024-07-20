// Write a program to remove duplicates from an unsorted linked list
// For example -: Input: array =  [3,5,3,7,8,5,10]
// Output: [3,5,7,8,10]

const array = [3, 5, 3, 7, 8, 5, 10];

function removeDuplicates(array) {
  const seen = {};
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!seen[element]) {
      seen[element] = true;
      result.push(element);
    }
  }
  return result;
}
console.log(removeDuplicates(array));
