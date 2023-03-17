//ES6 module

const arr = [12, 43, 545, 12, 65, 37, 02, -6, 567, 1, 4];

const largestElement = Math.max(...arr);
console.log(largestElement);

const minimumElement = Math.min(...arr);
console.log(minimumElement);

// normal js function

function arrLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(arrLargest(arr));

// By forof loop;

const largestNumber = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;

  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

console.log(largestNumber(arr));

//minimum element from an array

const minimumNumber = (arr) => {
  let smallest = Number.POSITIVE_INFINITY;

  for (const num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
};

console.log(minimumNumber(arr));

//By reduce method

const minNumberFromArray = () => {
  return arr.reduce((accumulator, currentValue) => {
    return Math.min(accumulator, currentValue);
  });
};
