/** 
 * Take an array of numbers and return the number with only one instance
 * @param {Array} numbers
 * @return {Boolean}
*/

export function lonelyNumber(numbers) {
  const sortedNumbers = numbers.sort();
  if (sortedNumbers.length === 1) {
    return sortedNumbers.pop();
  }
  for (let number in sortedNumbers) {
    if (sortedNumbers[number] === sortedNumbers[number++]) {
      sortedNumbers.shift();
      sortedNumbers.shift();
    }
  }
  return sortedNumbers.pop();
}

const array = [1];
console.log(lonelyNumber(array));