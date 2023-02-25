// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//* examples 
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//* Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")

// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy

// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//* keywords:
// 2 numbers and 1 operand
// integer division (ignore remainder)

//* assumptions:
// do not allow divide by 0

//* pseudo code:
// each number must receive either an operand or nothing as is argument
// each operand must receive a number with no argument as its argument
// if a number is called with an argument, it will return the result of its actual number, the operand, and the operand's number.
// if a number is called without an argument, return its actual number.
// operands should return their operand and the arg number as a string
// number with arg should eval its actual number, concatenated to the argument (which will be a string)

//to account for integer division, always round down the eval

const zero = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('0' + rightSide)) : 0
)

const one = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('1' + rightSide)) : 1
)

const two = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('2' + rightSide)) : 2
)

const three = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('3' + rightSide)) : 3
)

const four = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('4' + rightSide)) : 4
)

const five = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('5' + rightSide)) : 5
)

const six = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('6' + rightSide)) : 6
)

const seven = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('7' + rightSide)) : 7
)

const eight = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('8' + rightSide)) : 8
)

const nine = (rightSide: string = ''): number => (
  rightSide ? Math.floor(eval('9' + rightSide)) : 9
)

const plus = (number: number): string => `+ ${number}`
const minus = (number: number): string => `- ${number}`
const times = (number: number): string => `* ${number}`
const dividedBy = (number: number): string => {
  if (number === 0) throw new Error("can't divide by 0")
  return `/ ${number}`
}


//* tests
describe("math with functions", () => {
  test("multiply", () => {
    expect(seven(times(five()))).toBe(35)
  })
  test('add', () => {
    expect(four(plus(nine()))).toBe(13);
  })
  test('subtract', () => {
    expect(eight(minus(three()))).toBe(5);
  })
  test('divide', () => {
    expect(six(dividedBy(five()))).toBe(1);
  })
});
