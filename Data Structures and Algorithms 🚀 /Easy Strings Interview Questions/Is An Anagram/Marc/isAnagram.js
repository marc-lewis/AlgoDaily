/**
 * Return a bool of whether strings are anagrams of each other
 * (Marc's solution)
 * @param {*} str1
 * @param {*} str2
 */
export function isAnagram(str1, str2) {
  const str1Split = str1.toLowerCase().split("").sort();
  const str2Split = str2.toLowerCase().split("").sort();

  for(let i = 0; i < str1Split.length; i++) {
    if(str1Split[i] !== str2Split[i]) {
      return false;
    }
  }
  return true;
}

/**
 * The solution from AlgoDaily
 * Return a bool of whether strings are anagrams of each other
 * @param {*} str1
 * @param {*} str2
 */
 export function algoDailySolution(str1, str2) {
  const str1Sorted = str1.toLowerCase().split("").sort().join('');
  const str2Sorted = str2.toLowerCase().split("").sort().join('');
  return str1Sorted === str2Sorted
}