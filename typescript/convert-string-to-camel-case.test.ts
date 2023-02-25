// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//* Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//* keywords
// camelCase/ PascalCase (only if origin string starts capitalized)


//* some assumptions
// the casing of the string is not guaranteed.
// delimiters may be mixed. 

//* pseudo code
// write a function that receives a string and returns a string
// save the first char of the string as firstChar
// separate the string at - or _ as arr
// for each word in arr, lowercase it,
// replace the first char with itself but capitalized  
// join the arr back together
// replace the first char with the original first char
// return the final string

function toCamelCase(str: string): string {
  if (str.length < 3) return str // need at least 3 chars to bother splitting

  const firstChar = str[0]
  const arr = str.split(/-|_/)

  const newStr = arr.map(word => {
    const lower = word.toLowerCase()
    return lower.replace(lower[0], lower[0].toUpperCase())
  }).join('')

  return newStr.replace(newStr[0], firstChar)
}

//* tests
describe('string to camel case', () => {
  test('empty string', () => {
    expect(toCamelCase('')).toBe('')
  })
  test('underscores', () => {
    expect(toCamelCase("The_stealth_warrior")).toBe("TheStealthWarrior")
  })
  test('hyphens', () => {
    expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior")
  })
})