/*

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

*/

const EXAMPLES = [
  {
    input: ['2', '1', '+', '3', '*'],
    output: 9,
  },
  {
    input: ['4', '13', '5', '/', '+'],
    output: 6,
  },
  {
    input: [
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ],
    output: 22,
  },
];

const OPERATORS: { [key: string]: (a: number, b: number) => number } = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (a / b) | 0,
};

/** Time O(n) | Space O(n) */
function evaluatePolishNotation(notation: string[]): number {
  const stack: number[] = [];

  for (const token of notation) {
    if (token in OPERATORS) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(OPERATORS[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;
  it('works', () => {
    EXAMPLES.forEach((example) => {
      expect(evaluatePolishNotation(example.input)).toEqual(example.output);
    });
  });
}
