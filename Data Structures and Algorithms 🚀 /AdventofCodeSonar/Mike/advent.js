const fs = require("fs");


// console.log(fizzBuzz(15));
const input = fs.readFileSync(process.argv[2], { encoding:'utf8' })
  .trim()
  .split("\n")
  .map(item => parseInt(item));

// console.log(input);

// node advent.js input.txt

// const countIncrease = arr => {
//   let increased = 0;
//   let thisOne = 0;
//   let nextOne = 1;
//   // console.log(arr.length)
//   while (nextOne < arr.length) {
//     if (arr[thisOne] < arr[nextOne]) {
//       increased++;
//     }
//     thisOne++;
//     nextOne++;
//   }
//   return increased;
// }

// function forLoop (input) {
//   let increments = 0;
//   for (let i = 1; i < input.length; i++) {
//     if (input[i] > input[i - 1]) {
//       increments += 1;
//     }
//   }
//   return increments;
// }

/**
 * The "ES6" way
 */
// input.reduce((acc, curr, i, arr) => curr > arr[i - 1] ? acc + 1 : acc, 0));


function forLoop (input) {
  let increments = 0;
  for (let i = 3; i < input.length; i++) {
    let A = input[i - 3] + input[i - 2] + input[i - 1];
    let B = input[i - 2] + input[i - 1] + input[i];
    if (A < B) {
      increments += 1; 
    }
  }
  return increments;
}

console.log(forLoop(input))




// function sum(previous, current) {
//   return previous + current
// };

// function getRollingWindowIncrements(items, windowSize) {
// let increments = 0;
// const end = items.length - windowSize;
// for(let i = 0; i < end; i++) {
//   const window1 = items.slice(i, i + windowSize).reduce(sum);
//   const window2 = items.slice(i + 1, i + 1 + windowSize).reduce(sum);
//   if(window2 > window1) {
//     increments++;
//   }
// }
// return increments;
// }
