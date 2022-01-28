/**
 * Return the sum of the minimum value of pairs of numbers in an array
 * @param {array, number, number} (arr lowerBound, upperBound)
 * @return {number} 
 */
export const missingNumberUnsorted = (arr, lowerBound, upperBound) => {
  let missingNumber = 0;
  let myArr =[];
  for (let i = lowerBound; myArr.length < upperBound; i++) {
    myArr.push(i);
    if ( !arr.includes(i)) {
      missingNumber += i;
      break;
    }
  } 
  return missingNumber;
}
