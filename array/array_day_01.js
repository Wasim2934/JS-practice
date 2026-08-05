// 1. Find the largest number ✅
// const arr = [12, 45, 7, 89, 23];

// let largestNum = arr[0];

// for (let num of arr) {
//     if (num > largestNum) {
//         largestNum = num
//     }
// }

// console.log(largestNum);

// -----------------------------------------------

// 2. Find the Second Largest Number

const arr = [10, 25, 8, 40, 35];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest); 

// ---------------------------------------------

// 3. Remove Duplicate Elements ✅
// const arr2 = [1, 2, 2, 3, 4, 4, 5];

// let emptyArr = []

// for (let num of arr2) {
//     if (!emptyArr.includes(num)) {
//         emptyArr.push(num)
//     }
// }
// console.log(emptyArr);

// -------------------------------------------

// 4. Reverse an Array (Without using reverse())
// const arr = [1, 2, 3, 4, 5];

// let reverseArr = []

// for (let i = arr.length-1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
// }

// console.log(reverseArr);

// ---------------------------------------------

// 5. Find Even Numbers ✅
// const arr = [3, 6, 9, 12, 15, 18];

// let evenNum = arr.filter(num => {
//     if (num % 2 == 0) return num
// })

// console.log(evenNum);
