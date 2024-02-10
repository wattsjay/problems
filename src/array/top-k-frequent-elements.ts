/*

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

const EXAMPLES = [
  {
    input: {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
    },
    output: [1, 2],
  },
  {
    input: {
      nums: [1],
      k: 1,
    },
    output: [1],
  },
];

/** Time O(n log n) | Space O(n) */
function getTopKFrequentElements({ nums, k }: { nums: number[]; k: number }) {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  return Array.from(sortedMap.keys()).slice(0, k);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Top K Frequent Elements', () => {
    EXAMPLES.forEach((example) => {
      expect(getTopKFrequentElements(example.input)).toEqual(example.output);
    });
  });
}
