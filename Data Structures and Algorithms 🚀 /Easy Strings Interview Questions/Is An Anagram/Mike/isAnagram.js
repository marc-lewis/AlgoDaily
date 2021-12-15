/**
 * Return a bool of whether strings are anagrams of each other
 * @param {*} str1
 * @param {*} str2
 */
export function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  
  for (let char1 of str1) {
    if (str2.indexOf(char1) === -1) {
      return false;
    }
  }
  return true;
}