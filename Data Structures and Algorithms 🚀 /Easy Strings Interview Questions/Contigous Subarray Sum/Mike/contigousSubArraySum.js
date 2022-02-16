/**
 * Return a boolean depending on if a subarray of the given array is equal to the given number.
 * @param {Array, number} (nums, n)
 * @return {Boolean}
 */
export const subarraySum = (nums, n) => {
  let i = 0;
  const lastIndex =  nums.length;
  let j =  lastIndex;

  while ( i < nums.length ) {
    let subNums = nums.slice(i, j);
    const subNumsSum = subNums.reduce(
      (prevVal, curVal) => prevVal + curVal
    );
    if ( j === (1 + i) ) {
      i++;
      j = lastIndex;
      continue;
    }
    if ( subNumsSum === n ) {
      return true;
    }
    j--;
  }

  return false;
}

// Their Solution - using Hashmaps!
// function subarraySum(nums, n) {
//   let sumsMap = { 0: 1 }; // hash of prefix sums
//   let sum = 0;
//   for (let num of nums) {
//     sum += num; // increment current sum
//     if (sumsMap[sum - n]) {
//       return true;
//     }
//     // store sum so far in hash with truthy value
//     sumsMap[sum] = true;
//   }
//   return false;
// }