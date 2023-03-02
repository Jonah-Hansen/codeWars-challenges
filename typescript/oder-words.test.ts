// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//* pseudo code
// split the string by spaces
// map over the array such that
// for each index in the array, return the word that includes the string representation of i+1
// return the resulting arr, joined by spaces.

function order(words: string) {
  const arr = words.split(' ')
  const result = arr.map((_word, i) => (
    arr.find(word => word.includes((i + 1).toString()))
  ))
  return result.join(' ')
}

//* tests

describe('your order, please', () => {
  test('', () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est")
  })
  test('', () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople")
  })
  test('', () => {
    expect(order("")).toBe("")
  })
})