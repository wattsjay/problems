/*

Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have 
to wait after the ith day to get a warmer temperature. If there is no 
future day for which this is possible, keep answer[i] == 0 instead.

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

*/

const EXAMPLES = [
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    output: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [30, 40, 50, 60],
    output: [1, 1, 1, 0],
  },
  {
    input: [30, 60, 90],
    output: [1, 1, 0],
  },
];

/** Time O(n^2) | Space O(n) */
function getDaysUntilWarmerBruteForce(temps: number[]): number[] {
  const results: number[] = [];
  let i = 0;
  while (i < temps.length) {
    let j = i + 1;
    while (j < temps.length) {
      if (temps[j] > temps[i]) {
        results.push(j - i);
        break;
      }
      j++;
    }
    if (j === temps.length) {
      results[i] = 0;
    }
    i++;
  }
  return results;
}

/** Time O(n) | Space O(n) */
function getDaysUntilWarmerGreedy(temps: number[]): number[] {
  const res: number[] = new Array(temps.length).fill(0);
  // Stack tracks temps that have not yet founda warmer day.
  // The top is the coldest.
  const stack: [temp: number, index: number][] = [];

  temps.forEach((t, i) => {
    // New temps are compared to the top of the stack.
    // If it's warmer, it means that we found a warmer day
    // for the day at the top of the stack and pop it.
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [_, stackIndex] = stack.pop() as [number, number];
      res[stackIndex] = i - stackIndex;
    }
    // Push current day onto the stack, because we haven't found
    // a warmer day for it yet.
    stack.push([t, i]);
  });

  // We are always dealing withe the most promising days first.
  // The coldest among the days that haven't found a warmer day yet.
  return res;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Brute Force', () => {
    EXAMPLES.forEach((example) => {
      expect(getDaysUntilWarmerBruteForce(example.input)).toEqual(
        example.output,
      );
    });
  });
  it('Greedy', () => {
    EXAMPLES.forEach((example) => {
      expect(getDaysUntilWarmerGreedy(example.input)).toEqual(example.output);
    });
  });
}
