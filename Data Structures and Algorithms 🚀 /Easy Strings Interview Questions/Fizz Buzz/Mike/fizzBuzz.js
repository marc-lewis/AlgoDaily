/**
 * @param {int} int
 * @returns {string}
 */

export function fizzBuzz(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("fizzbuzz");
    } else if (i % 5 === 0 ) {
      array.push("buzz");
    } else if (i % 3 === 0 ) {
      array.push("fizz");
    } else {
      array.push(i.toString());
    }
  }
  
  return array.join("");
}

// console.log(fizzBuzz(15));