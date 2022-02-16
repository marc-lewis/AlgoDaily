/**
 * Return the sum of all prime numbers smaller than or equal to the input
 * @param {number} n
 * @return {number}
 */
export const sumPrimes = (n) => {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const isPrime = (num) => {
  for (let k = 2; k < num; k++) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
};

// Their Solution - Much Nicer!
// function sumOfPrimes(n) {
//   const numsLessThanN = Array.from({ length: n + 1 }, function (val, idx) {
//     return idx;
//   }).slice(2);

//   const primes = numsLessThanN.filter((num) => {
//     let primeCandidate = num - 1;

//     while (primeCandidate > 1 && primeCandidate >= Math.sqrt(num)) {
//       if (num % primeCandidate === 0) return false;
//       primeCandidate--;
//     }

//     return true;
//   });

//   return primes.reduce((prime1, prime2) => prime1 + prime2);
// }
