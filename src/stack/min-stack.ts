/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

const EXAMPLES = [
  {
    input: [
      ['push', [-2]],
      ['push', [0]],
      ['push', [-3]],
      ['getMin'],
      ['pop'],
      ['top'],
      ['getMin'],
    ],
    output: [null, null, null, -3, null, 0, -2],
  },
];

/**
 * Min Stack
 * Time O(n) | Space O(n)
 */
class MinStack {
  values: number[] = [];
  minimums: number[] = [];

  // T O(1) | S O(1)
  push(value: number) {
    this.values[this.values.length] = value;
    const min = this.getMin();
    if (this.minimums.length === 0 || (min !== null && value <= min)) {
      this.minimums[this.values.length] = value;
    }

    return null;
  }

  // T O(1) | S O(1)
  pop(): number | null {
    const value = this.values[this.values.length - 1];
    delete this.values[this.values.length - 1];

    if (value === this.getMin()) {
      delete this.minimums[this.minimums.length - 1];
    }

    return value ?? null;
  }

  // T O(1) | S O(1)
  top(): number | null {
    return this.values[this.values.length - 1] ?? null;
  }

  // T O(1) | S O(1)
  getMin(): number | null {
    return this.minimums[this.minimums.length - 1] ?? null;
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Min Stack', () => {
    const minStack = new MinStack();
    EXAMPLES.forEach((example) => {
      const operationName = example.input[0] as unknown as keyof MinStack;
      if (typeof minStack[operationName] === 'function') {
        expect((minStack[operationName] as Function)(example.input[1])).toEqual(
          example.output,
        );
      }
    });
  });
}
