/**
 * Return the missing numbers in a sequentially rising array of numbers
 * @param {array} numArr
 * @return {array}
 */
export const missingNumbers = (numArr) => {
  let missing = [];
  for(let i = numArr[0]; i <= numArr[numArr.length - 1]; i++) {
    if(numArr.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  return missing;
}
