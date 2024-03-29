/*

Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging
the letters of a different word or phrase, 
typically using all the original letters exactly once.

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters?
How would you adapt your solution to such a case?

*/

const EXAMPLES = [
  {
    input: {
      s: 'anagram',
      t: 'nagaram',
    },
    output: true,
  },
  {
    input: {
      s: 'rat',
      t: 'car',
    },
    output: false,
  },
];

/** Time O(n) | Space O(n) */
function isAnagramValid({ s, t }: { s: string; t: string }) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Valid Anagram', () => {
    EXAMPLES.forEach((example) => {
      expect(isAnagramValid(example.input)).toEqual(example.output);
    });
  });
}
