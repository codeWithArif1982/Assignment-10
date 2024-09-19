/* Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/
function calculateDifference(a, b) {
  return a - b;
}
console.log(
  `Difference between two arguments is : `,
  calculateDifference(3, 2)
);

/* Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.*/
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(`Number you given is : `, isOdd(4));

/* Write a function named findMin that takes an array of numbers and returns the smallest number in the array.*/
function findMin(arr) {
  return Math.min(...arr);
}
const numbersArray = [3, 4, 5, 10];
console.log(`Smallest number in the array is : `, findMin(numbersArray));

/* Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.*/
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Array contain even numbers : `, filterEvenNumbers(inputArray));

/* Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.*/
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}
const givenArray = [9, 3, 1, 10, 29, 5];
console.log(
  `Given array sort in a descending order : `,
  sortArrayDescending(inputArray)
);

/* Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.*/
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str; // Handle empty string
  return str[0].toLowerCase() + str.slice(1);
}
const str = "I born in bangladesh";
console.log(`given string : `, lowercaseFirstLetter(str));

/* Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string.
 It should filter vowels from the string.*/
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}
const sentence = "I love Bangladesh";
console.log(`Total vowels in the sentence`, countVowels(sentence));

/*)Write a function named findAverage that takes an array of numbers and returns the average of all elements*/
function findAverage(arr) {
  if (arr.length === 0) return 0; // Handle empty array
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
const arr = [1, 5, 8, 3];
console.log(`Total vowels in the sentence`, findAverage(arr));
