/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

const EXAMPLES = [
  {
    input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
  },
  {
    input: [''],
    output: [['']],
  },
  {
    input: ['a'],
    output: [['a']],
  },
];

/**
 * Sorted Map
 * Time O(n log n) | Space O(n)
 */
function groupAnagramsSortedMap(words: string[]) {
  // S O(n)
  const map = new Map<string, string[]>();

  // T O(n)
  for (const word of words) {
    // T O(n log n)
    const sortedWord = word.split('').sort().join('');
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord)?.push(word);
  }

  return Array.from(map.values());
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Sorted Map', () => {
    EXAMPLES.forEach((example) => {
      expect(
        groupAnagramsSortedMap(example.input)
          .map((group) => group.sort())
          .sort(),
      ).toEqual(example.output.map((group) => group.sort()).sort());
    });
  });
}
