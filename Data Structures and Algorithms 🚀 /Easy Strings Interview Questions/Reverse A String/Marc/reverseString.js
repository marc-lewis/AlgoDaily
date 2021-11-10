/**
 * Reverse a string using a single pointer
 * @param {string} str
 * @returns {string}
 */
export function reverseStringOnePointer(str) {
  let reversedString = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

/**
 * Reverse a string using the two pointer technique
 * @param {string} str
 * @returns {string}
 */
export function reverseStringTwoPointers(str) {
  let reversedString = [];
  let head = 0;
  let tail = str.length - 1;
  while(head < tail) {
    reversedString[head] = str[tail];
    reversedString[tail] = str[head];
    tail--;
    head++;
  }
  return reversedString.join("");
}