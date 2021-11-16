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

/**
 * The two pointer only method modified from the second example
 * Reverse only alphabetical parts of string
 * @param {string} string
 * @returns string
 */
export function reverseOnlyAlphabetical2PointerOnly(string) {
  const reversedString = string.split('');
  let head = 0;
  let tail = string.length - 1;
  let alphaRegex = /[a-z]/i;
  while(head < tail) {
    if(!alphaRegex.test(string[head])) {
      head++;
    } else if (!alphaRegex.test(string[tail])) {
      tail--;
    } else {
      reversedString[head] = string[tail];
      reversedString[tail] = string[head];
      head++;
      tail--;
    }
  }
  return reversedString.join('');
}