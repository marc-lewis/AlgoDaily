/**
 * Return a bool of whether strings are anagrams of each other
 * (Marc's solution)
 * doesn't match for all strings?
 * @param {*} str1
 */
// export function isPalindrome(str) {
//   const normalisedStr = str.toLowerCase().replace(/ /g, '');
//   const reversed = normalisedStr.split('').reverse().join('');
//   return str === reversed;
// }

export function isPalindrome(str) {
  const normalisedStr = str.toLowerCase().replace(/ /g, '').split('');
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