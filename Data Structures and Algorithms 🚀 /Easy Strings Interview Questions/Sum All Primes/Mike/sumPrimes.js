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

