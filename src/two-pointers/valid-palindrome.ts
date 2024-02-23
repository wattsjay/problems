/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase 
letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

const EXAMPLES = [
  {
    input: 'A man, a plan, a canal: Panama',
    output: true,
  },
  {
    input: 'race a car',
    output: false,
  },
  {
    input: ' ',
    output: true,
  },
];

/** Time O(n) | Space O(n) */
function isValidPalindrome(str: string): boolean {
  const sanitized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (sanitized[i] !== sanitized[sanitized.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it(() => {
    EXAMPLES.forEach((example) => {
      expect(isValidPalindrome(example.input)).toEqual(example.output);
    });
  });
}
