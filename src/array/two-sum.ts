/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

const EXAMPLES = [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    output: [0, 1],
  },
  {
    input: {
      nums: [3, 2, 4],
      target: 6,
    },
    output: [1, 2],
  },
  {
    input: {
      nums: [3, 3],
      target: 6,
    },
    output: [0, 1],
  },
];

/**
 * Hash Set
 * Time O(n) | Space O(n)
 */
function twoSumHashMap({ nums, target }: { nums: number[]; target: number }) {
  const hashMap = new Map();
  // T O(n)
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // T O(1)
    if (hashMap.has(complement)) {
      // T O(1)
      return [hashMap.get(complement), i];
    }
    // S O(n)
    hashMap.set(nums[i], i);
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Hash Set', () => {
    EXAMPLES.forEach((example) => {
      expect(twoSumHashMap(example.input)).toEqual(example.output);
    });
  });
}
