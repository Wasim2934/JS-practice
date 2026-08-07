// // 1. Find the largest number ✅
// const arr = [12, 45, 7, 89, 23];

// let largestNum = arr[0];

// for (let num of arr) {
//   if (num > largestNum) {
//     largestNum = num
//   }
// }

// console.log(largestNum);

// -------------------------------------------

// 2. Find the smallest element in an array. ✅
// const arr = [12, 45, 7, 89, 23, 5];

// let smallestNum = arr[0];

// for (let num of arr) {
//   if (num < smallestNum) {
//     smallestNum = num
//   }
// }

// console.log(smallestNum);

// ---------------------------------------------

// 3. Find the Second Largest Number ✅

// const arr = [10, 25, 8, 40, 35];

// let largestNum = -Infinity
// let secondLargestNum = -Infinity

// for (let num of arr) {
//   if (num > largestNum) {
//     secondLargestNum = largestNum
//     largestNum = num
//   } else if (num > secondLargestNum && num !== largestNum) {
//     secondLargestNum = num
//   }
// }

// console.log(secondLargestNum);

// -------------------------------------------

// 4. Calculate the sum of all elements.
// const arr = [12, 45, 7, 89, 23, 5];

// let sum = 0

// for (let num of arr) {
//   sum += num
// }

// console.log(sum);

// --------------------------------------------
// 5. Calculate the average of all elements.
// const arr = [12, 45, 7, 89, 23, 5];

// let sum = 0

// for (let num of arr) {
//   sum += num
// }

// let average = sum / arr.length
// console.log(average);

// -----------------------------------------------

// 6. Count the number of even and odd elements.
// const arr = [12, 45, 7, 89, 23, 5, 36];

// let evenElem = 0
// let oddElem = 0

// for (let num of arr) {
//   if (num % 2 == 0) {
//     evenElem++
//   } else {
//     oddElem++
//   }
// }

// console.log('Even numbers -', evenElem, 'Odd numbers -', oddElem);

// ---------------------------------------------

// 7. Remove Duplicate Elements ✅
// const arr = [1, 2, 2, 3, 4, 4, 5];

// let elements = []

// for (let nums of arr) {
//   if (!elements.includes(nums)) {
//     elements.push(nums)
//   }
// }

// console.log(elements);

// -------------------------------------------

// 8. Reverse an Array (Without using reverse())
// const arr = [1, 2, 3, 4, 5];

// const reversedArr = []

// for (let i = arr.length-1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }

// console.log(reversedArr);

// ---------------------------------------------

// 9. Find Even Numbers ✅
// const arr = [3, 6, 9, 12, 15, 18];

// let evenNums = []

// for (let num of arr) {
//   if (num % 2 === 0) {
//     evenNums.push(num)
//   }
// }

// console.log(evenNums);

// -------------------------------------------

// 10. Check if an array is sorted in ascending order
// let arr = [1, 2, 3, 4, 5];

// const isSorted = true

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false
//         break;
//     } 
// }

// console.log(isSorted)

// ------------------------------------------

// 11. Move all zeros to the end (Maintain order)
// const arr = [1,0,2,0,3,4,0]

// // Approach 1
// let result = []
// let zeroes = []

// for (let num of arr) {
//     if (num !== 0) {
//         result.push(num)
//     } else if (num == 0) {
//         zeroes.push(num)
//     }     
// }

// while(result.length < arr.length) {
//     result.push(0)
// }

// console.log(result);

// // Approach 2
// let result = []
// let zeroes = []

// for (let num of arr) {
//     if (num !== 0) {
//         result.push(num)
//     } else if (num == 0) {
//         zeroes.push(num)
//     }     
// }

// let newArr = [...result, ...zeroes]
// console.log(newArr);

// --------------------------------------

// 12. Find the frequency of each element ✅✅
// const arr = [1,2,2,3,3,3]

// Using for of loop****
// let obj = {}

// for (let num of arr) {
//     if (obj[num]) {
//         obj[num]++
//     } else {
//         obj[num] = 1
//     }
// }

// console.log(obj);

// Using for loop*****
// let obj = {}
// for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++
//     } else {
//         obj[arr[i]] = 1
//     }
// }

// console.log(obj);

// -------------------------------

// 13. Find the element that appears the most ✅✅✅
// const arr = [1,2,2,2,2,3,3,3,4]

// let obj = {}
// let maxCount = 0
// let answer;


// for (let num of arr) {
//     if (obj[num]) {
//         obj[num]++
//     } else {
//         obj[num] = 1
//     }
// }
// console.log(obj);

// for (let key in obj) {
//     if (obj[key] > maxCount) {
//         maxCount = obj[key]
//         answer = key
//     }
// }

// console.log("Answer:", answer, "Max Count:", maxCount);









