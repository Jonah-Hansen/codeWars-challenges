// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//* Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

//* Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

//* pseudo code
// we can early return for any even numbers except 2, or numbers <= 1
// we can check divisibility between the given number, and all other numbers between 3(the next prime after 2) and the square root of num. 

function isPrime(num: number): boolean {
  if (num === 2) return true
  if (num <= 1 || num % 2 == 0) return false
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  } return true
}

//* tests 

describe('is it prime', () => {
  test('', () => {
    expect(isPrime(0)).toBe(false)
  })
  test('', () => {
    expect(isPrime(5)).toBe(true)
  })
  test('', () => {
    expect(isPrime(-1)).toBe(false)
  })
  test('', () => {
    expect(isPrime(5099)).toBe(true)
  })
  test('', () => {
    expect(isPrime(2147483647)).toBe(true)
  })
})