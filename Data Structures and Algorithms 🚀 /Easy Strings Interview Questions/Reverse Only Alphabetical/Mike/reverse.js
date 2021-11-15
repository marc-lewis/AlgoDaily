/**
 * @param {string}
 * @returns {string}
 */

export const reverseOnlyAlphabetical = (str) => {
  const regex = /([a-zA-Z])/;
  const alphaChars =[];
  str = [...str];

  for (let char of str) {
    if (regex.test(char)) {
      alphaChars.push(char);
    }
  }

  let j = alphaChars.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      str[i] = alphaChars[j--]
    }
  }
  
  return str.join("");
}