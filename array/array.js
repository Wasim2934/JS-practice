// // 1. Find the largest number ✅
// const arr = [12, 45, 7, 89, 23];

// let largestNum = arr[0];

// for (let val of arr) {
//     if (val > largestNum) {
//         largestNum = val
//     }
// }

// console.log(largestNum);

// -------------------------------------------

// 2. Find the smallest element in an array. ✅
// const arr = [12, 45, 7, 89, 23, 5];

// let smallestNum = arr[0]

// for (let val of arr) {
//     if (val < smallestNum) {
//         smallestNum = val
//     }
// }

// console.log(smallestNum);

// ---------------------------------------------

// 3. Find the Second Largest Number ✅

// const arr = [10, 25, 8, 40, 35, 89];

// let firstLargestNum = -Infinity
// let secondLargestNum = -Infinity

// for (let num of arr) {
//     if (num > firstLargestNum) {
//         secondLargestNum = firstLargestNum;
//         firstLargestNum = num;
//     } else if (num > secondLargestNum && num !== firstLargestNum) {
//         secondLargestNum = num
//     }
// }

// console.log('firstLargestNum: ', firstLargestNum, 'secondLargestNum: ', secondLargestNum);

// -------------------------------------------

// 4. Calculate the sum of all elements.
// const arr = [12, 45, 7, 89, 23, 5];

// let sum = 0

// for (let val of arr) {
//     sum += val
// }

// console.log(sum);

// --------------------------------------------
// 5. Calculate the average of all elements.
// const arr = [12, 45, 7, 89, 23, 5];

// let sum = 0

// for (let val of arr) {
//     sum += val
// }

// let avg = sum / arr.length

// console.log(avg.toFixed());

// -----------------------------------------------

// 6. Count the number of even and odd elements.
// const arr = [12, 45, 7, 89, 23, 5, 36];

// let evenNum = 0
// let oddNum = 0

// for (let val of arr) {
//     if (val % 2 == 0) {
//         evenNum++
//     } else oddNum++
// }

// console.log('evenNum: ', evenNum, 'oddNum: ', oddNum);

// ---------------------------------------------

// 7. Remove Duplicate Elements ✅
// const arr = [1, 2, 2, 3, 4, 4, 5];

// let result = []
// for (let val of arr) {
//     if (!result.includes(val)) {
//         result.push(val)
//     } 
// }

// console.log(result);

// -------------------------------------------

// 8. Reverse an Array (Without using reverse())
// const arr = [1, 2, 3, 4, 5];

// let reversedArr = []

// for (let i = arr.length-1; i >= 0; i--) {
//     reversedArr.push(arr[i])
// }

// console.log(reversedArr);

// ---------------------------------------------

// 9. Find Even Numbers ✅
// const arr = [3, 6, 9, 12, 15, 18];

// let evenNum = []

// for (let val of arr) {
//     if (val % 2 == 0) {
//         evenNum.push(val)
//     }
// }

// console.log('evenNum: ', evenNum);

// -------------------------------------------

// 10. Check if an array is sorted in ascending order
// let arr = [1, 2, 3, 4, 5];

// let sortedArr = true

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i+1]) {
//         sortedArr = false
//         break
//     }
// }

// console.log(sortedArr);



// ------------------------------------------

// 11. Move all zeros to the end (Maintain order)
// const arr = [1,0,2,0,3,4,0]

// let nonZero = []  *************
// let zeros = []

// for (let val of arr) {
//     if (val !== 0) {
//         nonZero.push(val)
//     } else zeros.push(val)
// }

// let result = [...nonZero, ...zeros]

// console.log(result);

// let nonZero = []

// for (let val of arr) {
//     if (val !== 0) {
//         nonZero.push(val)
//     } 
// }

// while(nonZero.length !== arr.length) {
//     nonZero.push(0)
// }

// console.log(nonZero);

// --------------------------------------

// 12. Find the frequency of each element ✅✅
const arr = [1,2,2,3,3,3]

let result = {}

for (let val in arr) {
    if (result.val) {
        result.val++
    }
    
}




// -------------------------------

// 13. Find the element that appears the most ✅✅✅
// const arr = [1,2,2,2,2,3,3,3,4]


// ------------------------------------------------

// Separate the numbers and strings into two different arrays:
  
// let arr = [10, "hello", 20, "world", 30, "JavaScript"];



// ------------------------------------------

// seperate the numbers and character (h, d, u) in two different array

// let arr = [10, "h", 20, "d", 30, "JavaScript", "u"];



// What will be the output ----------------------
// let arr = [1, 2, 3, 4, 5];



// --------------------------------------


















