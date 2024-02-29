# Problems

A selection of problems implemented in TypeScript.

## A — Array

### 1. 🟢 🙂 [Contains Duplicate](./src/array/contains-duplicate.ts)

- **DS**: Set
- **Algorithm**: Count difference in length.

### 2. 🟢 🙂 [Valid Anagram](./src/array/valid-anagram.ts)

- **DS**: List
- **Algorithm**: Count frequency of each character.

### 3. 🟢 🙂 [Two Sum](./src/array/two-sum.ts)

- **DS**: Map
- **Algorithm**: Test for compliment.

### 4. 🟠 🙂 [Group Anagrams](./src/array/group-anagrams.ts)

- **DS**: Map
- **Algorithm**: Sort.

### 5. 🟠 🙂 [Top K Frequent Elements](./src/array/top-k-frequent-elements.ts)

- **DS**: Map
- **Algorithm**: Sort.

### 6. 🟠 🙂 [Product of Array Except Self](./src/array/product-of-array-except-self.ts)

- **DS**: List
- **Algorithm**: Prefix & Postfix.

### 7. 🟠 🙂 [Valid Soduko](./src/array/valid-soduko.ts)

- **DS**: Map of Sets
- **Algorithm**: Loop rows, columns to get cell. Test if cell is contained in respective row, column, or square set of values using a unique set key. Square keys are generated by banding and intersecting row and column indices using Math.floor and square dimension of 3: `${row}-${column}`.

### 8. 🟠 😐 [String Encode and Decode](./src/array/string-encode-and-decode.ts)

- **DS**: List
- **Algorithm**: Nested while loop.

### 9. 🟠 🙂 [Longest Consecutive Sequence](./src/array/longest-consecutive-sequence.ts)

- **DS**: Set
- **Algorithm**:
  1. CREATE numbers Set.
  2. ITERATE numbers.
  3. GET sequence start. IF previous number IS NOT IN Set.
  4. SET sequence length IF longer THAN existing.
  5. RETURN sequence length.

## B — Stack

### 1. 🟢 🙂 [Valid Parentheses](./src/stack/valid-parentheses.ts)

- **DS**: Stack
- **Algorithm**:
  1. ITERATE brackets.
  2. IF open THEN push.
  3. ELSE IF pop != matching bracket THEN RETURN false.
  4. ELSE RETURN stack = empty.

### 2. 🟠 🙂 [Min Stack](./src/stack/min-stack.ts)

- **DS**: Stack x 2
- **Algorithm**:
  1. WHEN push IF value < MinStack top THEN push MinStack.
  2. WHEN pop IF value = MinStack top THEN pop MinStack.

### 3. 🟠 🙂 [Evaluate Reverse Polish Notation](./src/stack/evaluate-reverse-polish-notation.ts)

- **DS**: Stack
- **Algorithm**:
  1. IF operator THEN evaluate two integers on Stack.
  2. ELSE push integer to Stack.

### 4. 🟠 🙂 [Generate Parentheses](./src/stack/generate-parentheses.ts)

- **Heuristics**: Backtracking, Recursion
- **DS**: Stack
- **Algorithm**: Call generator function recursively.

### 5. 🟠 🙁 [Daily Temperatures](./src/stack/daily-temperatures.ts)

- **Heuristics**: Greedy
- **DS**: Stack
- **Algorithm**: ?

### 6. 🟠 🙂 [Car Fleet](./src/stack/car-fleet.ts)

- **Heuristics**: Greedy
- **DS**: Stack
- **Algorithm**:
  1. Zip distance and speed.
  2. Sort descending distance.
  3. ITERATE zipped cars.
  4. Calculate ETA THEN push to Stack.
  5. IF car ETA < car ahead THEN pop and merge car from Stack.

## C — Two Pointers

### 1. 🟢 🙂 [Valid Palindrome](./src/two-pointers/valid-palindrome.ts)

- **Algorithm**: Walk two pointers in opposite directions.

### 2. 🟢 🙂 [Two Sum II - Input Array Is Sorted](./src/two-pointers/two-sum-ii.ts)

- **Algorithm**:
  1. Walk two pointers in possite directions
  2. IF sum > target THEN decrease endPointer
  3. IF sum < target THEN increase startPointer
