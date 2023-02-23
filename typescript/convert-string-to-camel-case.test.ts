// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str: string): string {
  return str
}

describe('string to camel case', () => {
  test('empty string', () => {
    expect(toCamelCase('')).toBe('')
  })
  test('lowercase', () => {
    expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior")
  })
})