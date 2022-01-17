/**
 * Return an array of the values of a Binary Tree In order (left node first, then root, then right node).
 * @param {string} str
 * @param {string} subStr
 * @return {index}
 */

export function detectSubstring(str, subStr) {
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[j]) {
      j++;
      if (j  === subStr.length) {
        return i - (subStr.length - 1);
      }
    } else {
      i -=j;
      j = 0;
    }
  }
  
  return -1;
}