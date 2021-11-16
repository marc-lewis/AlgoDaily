/**
 * Return a bool of whether strings are anagrams of each other
 * (Marc's solution 1)
 * @param {*} str1
 */
// export function isPalindrome(str) {
//   const normalisedStr = str.toLowerCase().replace(/\s/g, '');
//   const reversed = normalisedStr.split('').reverse().join('');
//   return normalisedStr === reversed;
// }

/**
 * Return a bool of whether strings are anagrams of each other
 * (Marc's solution 2)
 * @param {*} str1
 */
export function isPalindrome(str) {
  const normalisedStr = str.toLowerCase().replace(/\s/g, '').split('');
  let head = 0;
  let tail = normalisedStr.length - 1;
  while(head < tail) {
    if(normalisedStr[head] !== normalisedStr[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
}