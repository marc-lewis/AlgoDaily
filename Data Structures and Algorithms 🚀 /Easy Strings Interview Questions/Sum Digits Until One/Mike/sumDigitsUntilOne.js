/**
 * Take a mulit- digit number, sum all the digits together until it is on digit, then return that number.
 * @param {number} num
 * @returns {number} 
 */

export const sumDigits = num => {
  let arr = Array.from(num.toString()).map(Number);
  while (arr.length > 1) {
    const ans = reducerHelper(arr);
    arr = Array.from(ans.toString()).map(Number);
  }
  return arr.pop();
}

function reducerHelper(arr) {
  const reducer = (valueA, valueB) => valueA + valueB;
  const ans = arr.reduce(reducer);
  return ans;
}
