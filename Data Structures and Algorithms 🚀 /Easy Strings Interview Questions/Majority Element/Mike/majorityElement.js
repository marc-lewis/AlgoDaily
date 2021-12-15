/**
 * Take an Array and return the element that is in the majority
 * @param {number[]} nums
 * @return {number}
 */

//First Version [Not O(n) but O(n^2)]
export const majorityElement = nums => {
  const mySet = new Set();
  for (const element of nums) {
    mySet.add(element);  
  }
  for (const element of mySet) {
    let tempNums = [];
    for (const num of nums) {
    if (element === num) tempNums.push(num);
    }
    if (tempNums.length > nums.length/2)
    return element;
  }  
  return null;
}

// //Because a MAJORITY measn > 50%!
// export const majorityElement = nums => {
//   nums.sort();
//   const midpoint = Math.floor(nums.length/2);
//     if (nums[0] === nums[midpoint]) {
//       return nums[0];
//     }
//   return null;
// }
