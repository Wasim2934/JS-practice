// 1. Reverse a String
// Input: "hello"
// Output: "olleh"

// let str = "hello";

// let result = ""

// for (let i = str.length-1; i >= 0; i--) {
//     result += str[i]
// }

// console.log(result);

// ---------------------------------------------

// 2. Check Palindrome
// Input: "madam" → true
// Input: "hello" → false
 
// let str = "madam" 
    
// let result = str.split('').reverse().join('')

// if (str === result) {
//     console.log(`Yes, it's a palindrome`);
// } else {
//     console.log(`No, it's not a palindrome`);
// }
   
// ---------------------------------------------
   
// 3. Count Characters
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
 
// let str = "hello"
 
// let result = {}
 
// for (let char of str) {
//     if (result[char]) {
//         result[char]++
//     } else {
//         result[char] = 1
//     }    
// }

// console.log(result);

// -------------------------------------

// 4. Convert First Character to Uppercase of the sentence
// Input: "javascript is a single threaded language"
// Output: "Javascript Is A Single Threaded Language"

// let str = "javascript is a single threaded language"

// let result = str.split(" ").map(value => {
//     let firstChar = value.charAt(0).toUpperCase()
//     let lastChar = value.slice(1)

//     return finalChar = firstChar + lastChar 
  
// }).join(' ')

// console.log(result);

// -------------------------------------------

// 5. Count Words in a String
// Input: "I am learning JavaScript"
// Output: 4

// let str = "I am learning JavaScript"

// let result = str.split(" ").length

// console.log(result);

// ---------------------------------------

// 6. Count Vowels
// Input: "javascript"
// Output: 3

// let str = "javascript"

// let vowelCount = 0

// for (let char of str) {
//     if ('aeiou'.includes(char)) {
//         vowelCount++
//     }
// }

// console.log(vowelCount);

// --------------------------------------

// 7. Remove All Spaces
// Input: "hello world javascript"
// Output: "helloworldjavascript"

// let str = "hello world javascript"

// let result = str.replaceAll(" ", "")

// console.log(result);

// ------------------------------------

// 8. Find the Longest Word
// Input: "I am learning JavaScript"
// Output: "JavaScript"

// let str = "I am learning JavaScript"

// let strSplit = str.split(" ")

// let LongestWord = strSplit[0]

// for (let val of strSplit) {
//     if (val.length > LongestWord.length) {
//         LongestWord = val
//     }
// }

// console.log(LongestWord);

// ----------------------------------------

// 9. Count Occurrence of a Character
// let str = "javascript"
// let char = "a"

// let charOccurrence = 0

// for (let val of str) {
//     if (val === char) {
//         charOccurrence++
//     }
// }

// console.log(charOccurrence);

// -----------------------------------------

// 10. Remove Duplicate Characters
// Input: "programming"
// Output: "progamin"
// (Order maintain karna hai.)

// let str = "programming"

// let result = ""

// for (let char of str) {
//     if (!result.includes(char)) {
//         result += char
//     }
// }

// console.log(result);




















