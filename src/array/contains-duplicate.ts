/*

Given an integer array nums, return true if any value 
appears at least twice in the array, and return 
false if every element is distinct.

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

const EXAMPLES = [
  {
    input: [1, 2, 3, 1],
    output: true,
  },
  {
    input: [1, 2, 3, 4],
    output: false,
  },
  {
    input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    output: true,
  },
];

/** Time O(n * log(n)) | Space O(1) */
function isContainDuplicate(nums: number[]) {
  const sortedNums = nums.sort((a, b) => a - b);

  for (
    let currentIndex = 0;
    currentIndex < sortedNums.length - 1;
    currentIndex++
  ) {
    const nextIndex = currentIndex + 1;
    const isNextDuplicate = sortedNums[currentIndex] === sortedNums[nextIndex];

    if (isNextDuplicate) return true;
  }

  return false;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Contains Duplicate', () => {
    EXAMPLES.forEach((example) => {
      expect(isContainDuplicate(example.input)).toEqual(example.output);
    });
  });
}
