/** 
 * Take an array of numbers and return the number with only one instance
 * @param {number} num
 * @return {Boolean}
*/

function lonelyNumber(numbers) {
  const sortedNumbers = numbers.sort();
  console.log(sortedNumbers);
  if (sortedNumbers.length === 1) {
    return sortedNumbers;
  }
  for (let number in sortedNumbers) {
    console.log(number);
    if (sortedNumbers[number] === sortedNumbers[number++]) {
      sortedNumbers.shift();
      sortedNumbers.shift();
    }
  }
  return sortedNumbers;
}
