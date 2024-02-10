/*

Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? 
(The output array does not count as extra space for space complexity analysis.)

*/

const EXAMPLES = [
  {
    input: [1, 2, 3, 4],
    output: [24, 12, 8, 6],
  },
  {
    input: [-1, 1, 0, -3, 3],
    output: [0, 0, 9, 0, 0],
  },
];

/** Time O(n) | Space O(1) */
function getProductOfArrayExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

function removeNegativeZeros(nums: number[]): number[] {
  return nums.map((num) => (Object.is(-0, num) ? 0 : num));
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Product of Array Except Self', () => {
    EXAMPLES.forEach((example) => {
      expect(
        removeNegativeZeros(getProductOfArrayExceptSelf(example.input)),
      ).toEqual(example.output);
    });
  });
}
