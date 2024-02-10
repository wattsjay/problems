/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

const EXAMPLES = [
  {
    input: '()',
    output: true,
  },
  {
    input: '()[]{}',
    output: true,
  },
  {
    input: '(]',
    output: false,
  },
  // NOTE: My own example. I'm not sure if this would be required or not
  // for example in a code editor application.
  {
    input: '({})',
    output: true,
  },
];

const OPEN_PAIRS = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
]);

const CLOSED_PAIRS = new Map([
  [')', '('],
  ['}', '{'],
  [']', '['],
]);

/** Time O(n) | Space O(n) */
function isBracketsValid(brackets: string): boolean {
  const stack: string[] = [];

  for (const bracket of brackets) {
    if (OPEN_PAIRS.has(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.pop() !== CLOSED_PAIRS.get(bracket)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Stack', () => {
    EXAMPLES.forEach((example) => {
      expect(isBracketsValid(example.input)).toEqual(example.output);
    });
  });
}
