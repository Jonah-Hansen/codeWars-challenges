// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//* pseudo code
// write a function that takes a string in camel case,
// split the string at each character
// for each char, compare it to the same char, but capitalized.
// if match, add a space before the char
// rejoin the string and return

function solution(string: string): string {
  const chars = string.split('')
  const split = chars.map(char => {
    if (char === char.toUpperCase()) return ' ' + char
    return char
  })
  return split.join('')
}

//* tests
describe('break camelCase', () => {
  test("", () => {
    expect(solution('camelCasing')).toBe('camel Casing')
  })
  test("", () => {
    expect(solution('camelCasingTest')).toBe('camel Casing Test')
  })
  test("", () => {
    expect(solution('word')).toBe('word')
  })
  test("", () => {
    expect(solution('')).toBe('')
  })
})


