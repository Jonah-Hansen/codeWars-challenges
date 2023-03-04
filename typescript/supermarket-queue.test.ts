// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
//  should return 12
//  because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
//  should return 10
//  because here n=2 and the 2nd, 3rd, and 4th people in the 
//  queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
//  should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool


//* pseudo code
// the function takes an array of numbers, representing how many minutes it will take that person to finish.
// it will also take a number that represents how many tills are usable.

// we can early return a few Cases. 
// if there is only one till open, just return the sum of the array.
// if there are more tills then number of customers, then return the largest number in the array.

// if there are less tills than customers, 
// create a new array of zeroes, the length of the numnber of tills
// while the original array is not empty, 
// add 1 to a counter
// for each item in the new array whose value is 0,
// shift the original array, and assign that value to that position
// then, subtract one from the item,
// once the original array is empty, return the sum of the counter with the largest number left in the new array

function queueTime(customers: number[], n: number) {
  if (customers.length === 0) return 0
  if (n === 1) return customers.reduce((a, b) => a + b)
  if (n >= customers.length) return Math.max(...customers)

  let tills = new Array(n).fill(0)
  let counter = 0
  while (customers.length > 0) {
    counter++
    tills = tills.map(till => {
      if (till === 0 && customers[0]) return customers.shift()! - 1
      return till - 1
    })
  }
  return counter + Math.max(...tills)
}

//* tests 
describe('the supermarket queue', () => {
  test('', () => {
    expect(queueTime([], 1)).toBe(0)
  })
  test('', () => {
    expect(queueTime([1, 2, 3, 4], 1)).toBe(10)
  })
  test('', () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9)
  })
  test('', () => {
    expect(queueTime([1, 2, 3, 4, 5], 100)).toBe(5)
  })
  test('', () => {
    expect(queueTime([10, 2, 3, 3], 2)).toBe(10)
  })
  test('', () => {
    expect(queueTime([2, 3, 10, 2], 2)).toBe(12)
  })
})