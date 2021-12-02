/**
 * @param {*} str1
 * @returns {boolean}
 */
export function isPalindrome(str) {
  const strForward = str.toLowerCase().replace(/\s/g, '').split("");
  let head = 0;
  let tail = strForward.length - 1;
  while (head < tail) {
    if (strForward[head] !== strForward[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
}