/*

Design an algorithm to encode a list of strings to a single string. 
The encoded string is then decoded back to the original list of strings.

Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.

*/

const EXAMPLES = [
  {
    input: ['neet', 'code', 'love', 'you'],
    output: ['neet', 'code', 'love', 'you'],
  },
  {
    input: ['we', 'say', ':', 'yes'],
    output: ['we', 'say', ':', 'yes'],
  },
];

const DELIMITER = '#';

/**
 * Encode
 * Time O(n) | Space O(n)
 */
function encode(strings: string[]): string {
  return strings
    .map((string) => `${string.length}${DELIMITER}${string}`)
    .join('');
}

/**
 * Decode
 * Time O(n) | Space O(n)
 */
function decode(s: string): string[] {
  let res: string[] = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== '#') {
      j += 1;
    }
    let length = parseInt(s.slice(i, j));
    i = j + 1;
    j = i + length;
    res.push(s.slice(i, j));
    i = j;
  }

  return res;
}

function encodeAndDecodeString(strings: string[]): string[] {
  return decode(encode(strings));
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Encode & Decode', () => {
    EXAMPLES.forEach((example) => {
      expect(encodeAndDecodeString(example.input)).toEqual(example.output);
    });
  });
}
