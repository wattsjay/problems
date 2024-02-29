/*

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number.

Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

*/

const EXAMPLES = [
  {
    input: {
      numbers: [2, 7, 11, 15],
      target: 9,
    },
    output: [1, 2],
  },
  {
    input: {
      numbers: [2, 3, 4],
      target: 6,
    },
    output: [1, 3],
  },
  {
    input: {
      numbers: [-1, 0],
      target: -1,
    },
    output: [1, 2],
  },
];

/** Time O(n^2) | Space O(1) */
function bruteForce({
  numbers,
  target,
}: {
  numbers: number[];
  target: number;
}): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const result = numbers[i] + numbers[j];
      if (result > target) {
        break;
      } else if (result === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [-1, -1];
}

/** Time O(n) | Space O(1) */
function twoPointers({
  numbers,
  target,
}: {
  numbers: number[];
  target: number;
}): number[] {
  let pointerStart = 0,
    pointerEnd = numbers.length - 1;

  while (pointerStart < pointerEnd) {
    const result = numbers[pointerStart] + numbers[pointerEnd];

    if (result > target) {
      pointerEnd -= 1;
    } else if (result < target) {
      pointerStart += 1;
    } else if (result === target) {
      return [pointerStart + 1, pointerEnd + 1];
    }
  }

  return [-1, -1];
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it(() => {
    EXAMPLES.forEach((example) => {
      expect(bruteForce(example.input)).toEqual(example.output);
    });
  });
  it(() => {
    EXAMPLES.forEach((example) => {
      expect(twoPointers(example.input)).toEqual(example.output);
    });
  });
}
