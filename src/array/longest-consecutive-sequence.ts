/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

const EXAMPLES = [
  {
    input: [100, 4, 200, 1, 3, 2],
    output: 4,
  },
  {
    input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    output: 9,
  },
];

/** Time O(n) | Space O(n) */
function getLongestConsecutiveSequence(numbers: number[]): number {
  // 1. Get unique numbers.
  const set = new Set(numbers);
  let max = 0;

  // 2. Interate over all numbers.
  for (let i = 0; i < numbers.length; i++) {
    // 3. Get sequence start.
    // By testing if previous number is not in set.
    if (!set.has(numbers[i] - 1)) {
      let current = numbers[i];
      let count = 1;

      // 4. Get sequence length.
      while (set.has(current + 1)) {
        current++;
        count++;
      }

      // 5. Update max sequence length if needed.
      max = Math.max(max, count);
    }
  }

  return max;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Set', () => {
    EXAMPLES.forEach((example) => {
      expect(getLongestConsecutiveSequence(example.input)).toEqual(
        example.output,
      );
    });
  });
}
