/**
 * The old classic!
 * @param {int} int
 * @returns {string}
 */
export function fizzBuzz(int) {
  let result = [];
  for(let i = 1; i <= int; i++) {
    if(
      i % 3 === 0
      && i % 5 === 0
    ) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
        result.push('buzz');
    } else if (i % 3 === 0) {
        result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result.join('');
}