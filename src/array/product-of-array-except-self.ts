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

/**
 * Brute Force
 * Time O(n^2) | Space O(n)
 */
function productOfArrayExceptSelfBruteForce(nums: number[]) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const prefix = nums.slice(0, i);
    const postfix = nums.slice(i + 1);
    result.push([...prefix, ...postfix].reduce((prev, curr) => prev * curr));
  }

  return result;
}

/**
 * PrefixPostfix
 * Time O(n) | Space O(1)
 */
function productExceptSelfPrefixPostfix(nums: number[]): number[] {
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
  it('Brute Force', () => {
    EXAMPLES.forEach((example) => {
      expect(
        removeNegativeZeros(productOfArrayExceptSelfBruteForce(example.input)),
      ).toEqual(example.output);
    });
  });
  it('Prefix Postfix', () => {
    EXAMPLES.forEach((example) => {
      expect(
        removeNegativeZeros(productExceptSelfPrefixPostfix(example.input)),
      ).toEqual(example.output);
    });
  });
}
