//Merge two sorted arrays in ascending order and remove duplicates
let arr1 = [1, 3, 4, 5, 5],
  arr2 = [2, 4, 4, 6, 8];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let sortedArr = arr3.sort((a, b) => a - b); //a-b for ascending order, if b-a it will be decending order
console.log(sortedArr);

let removeDuplicate = [...new Set(sortedArr)];
console.log(removeDuplicate);
