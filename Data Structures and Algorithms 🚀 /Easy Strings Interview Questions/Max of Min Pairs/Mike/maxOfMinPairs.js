/**
 * Return the sum of the minimum value of pairs of numbers in an array
 * @param {array} nums
 * @return {number} 
 */
export const maxOfMinPairs = nums => {
  let sum = 0;
  nums.sort();
  for (let i = 0; i < nums.length; i+=2) {
    sum += Math.min(nums[i], nums[i + 1]);             
  }
  return sum;
}
