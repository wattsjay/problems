/*

Given n pairs of parentheses, write a function to generate all 
combinations of well-formed parentheses.

Constraints:

1 <= n <= 8

*/

const EXAMPLES = [
  {
    input: 3,
    output: ['((()))', '(()())', '(())()', '()(())', '()()()'],
  },
  {
    input: 1,
    output: ['()'],
  },
];

/** Time (O2n^2n) | Space O(n) */
function generateParentheses(count: number): string[] {
  const result: string[] = [];

  function generate(str = '', open = 0, closed = 0) {
    if (str.length === count * 2) {
      result.push(str);
      return;
    }

    if (open < count) {
      generate(str + '(', open + 1, closed);
    }

    if (closed < open) {
      generate(str + ')', open, closed + 1);
    }
  }

  generate();

  return result;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Generate Parentheses', () => {
    EXAMPLES.forEach((example) => {
      expect(generateParentheses(example.input)).toEqual(example.output);
    });
  });
}
