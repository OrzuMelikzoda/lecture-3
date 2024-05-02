// function mergeArrays(...arr) {
//   return [].concat(...arr);
// }
// console.log(mergeArrays([1,2,3],[4,5,6]));


// function findIndex(args,num) {
//     return args.indexOf(num);
// }
// console.log(findIndex([1,2,3],3));


// function removeDuplicates(arr) {
//   return arr.filter((el, index, array) => arr.indexOf(el) == index);
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 5]));


// function removeNegatives(arr) {
//   return arr.filter((el) => el > 0);
// }
// console.log( removeNegatives([-1, 2, -3, 4, -5]));
// console.log( removeNegatives([-12,-32,-4,-7]));


// function calculateAverage(arr) {
//   let result = 0;
//   arr.map((el) => {
//     result += el / arr.length;
//   })
//   return result;
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));
// console.log(calculateAverage([1, 2, 3, 4, 5]));


// function isPalindromeArray(arr) {
//     let result = arr.toString()
//     return arr.reverse().toString() == result
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));


// function arrBetween(num1, num2, arr) {
//   let result = [];
//   return arr.filter((el, index, arr) => {
//     if (num1 < el && el < num2) {
//       result.push(el);
//       return result;
//     }
//   });
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));


// function sumArray(arr) {
//   let cnt = arr.reduce((acc, el, index, array) => acc + el);
//   return cnt;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));






// function checkSquareAndCube(arr) {
//   let m = 0;
//   let n = 0;
//   let result = 0;
//   let res = arr.forEach((el, index, array) => {
//     if (n <= 0) {
//       m = Math.sqrt(el);
//       n++;
//     } else {
//       result = el;
//     }
//   });
//   return m ** 3 == result;
// }
// console.log(checkSquareAndCube([4, 8]));
// console.log(checkSquareAndCube([16, 48]));
// console.log(checkSquareAndCube([9, 27]));

// function invertArray(arr) {
//     return arr.map((el, index, array) => el* (-1))
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));

// function getMultipliedArr(arr) {
//     let result = arr.map((el) => el * 2)
//     return cnt
// }
// console.log(getMultipliedArr([2, 5, 3]));
// console.log( getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));

// function sumFive(arr) {
//   let result = 0;
//   let cnt = arr.forEach((el) => {
//     if (el > 5) {
//       result += el;
//     }
//   });
//   return result;
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));

// function filterArray(arr) {
//     return arr.filter((el) => typeof el == "number")
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log( filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

//                                      task1

// function getFirstValue(arr) {
//     let [a] = arr
//   return a;
// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

//                                      task2

// function makePair(...args) {
//   return args;
// }
// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215, 5582));

//                                      task3

// function reverse(arr) {
//     return arr.reverse()
// }
// console.log( reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));

//                                      task4

// function getLastItem(arr) {
//   return arr.map((el) =>  el + 1)
// }
// console.log(getLastItem([0, 1,2,3,4,5,6,7,8,9]));

//                                      task5

// function getLastItem(arr) {
//     return arr.at(-1)
// }
// console.log( getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

//                                      task6

// function arrayToString(arr) {
//     return `"${arr.join("")}"`
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log( arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

//                                      task7

// function check(arr, a) {
//     return arr.includes(a)
// }
// console.log( check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));

//                                      task8

// function findIndex(arr, el) {
//   return arr.indexOf(el);
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));

//                                      task9

// function concat(...arr) {
//   return [].concat(...arr);
// }
// console.log( concat([1, 3, 5], [2, 6, 8]));
// console.log( concat([4, 5, 1], [3, 3, 3, 3, 3]));

//                                      task10

// function toNumberArray(arr) {
//     return arr.map((el, index, array) => +el)
// }
// console.log( toNumberArray(["9.4", "4.2"]));
// console.log( toNumberArray(["91", "44"]));