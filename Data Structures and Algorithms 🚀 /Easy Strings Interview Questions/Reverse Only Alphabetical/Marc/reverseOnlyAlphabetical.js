/**
 * Reverse only alphabetical parts of string
 * @param {string} string
 * @returns string
 */
 export function reverseOnlyAlphabetical(string) {
  const reversedStringChars = string.split('');
  const reversedAlphaChars = [];
  const alphaChars = string.match(/[a-z]/gi);
  let head = 0;
  let tail = alphaChars.length - 1;
  while(head < tail) {
    reversedAlphaChars[head] = alphaChars[tail];
    reversedAlphaChars[tail] = alphaChars[head];
    head++;
    tail--;
  }
  for(let i = 0; i < string.length; i++) {
    if(/[a-z]/i.test(reversedStringChars[i])) {
      reversedStringChars[i] = reversedAlphaChars.shift()
    }
  }
  return reversedStringChars.join('');
}