/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 
Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/

const EXAMPLES = [
  {
    input: [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    output: true,
  },
  {
    input: [
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    output: false,
  },
];

const GRID_SIZE = 9;
const EMPTY_CELL = '.';

// This square key groups related values together by
// banding and intersecting their row and column indices.
const getSquareKey = (row: number, column: number) =>
  `${Math.floor(row / 3)}-${Math.floor(column / 3)}`;

function isValidSudoku(board: string[][]): boolean {
  const columnValues: Record<number, Set<string>> = {};
  const rowValues: Record<number, Set<string>> = {};
  const squareValues: Record<string, Set<string>> = {};

  for (let rowIndex = 0; rowIndex < GRID_SIZE; rowIndex++) {
    for (let columnIndex = 0; columnIndex < GRID_SIZE; columnIndex++) {
      // 1. Get current cell value.
      const cell = board[rowIndex][columnIndex];

      // 2. If cell is empty, then skip its validation.
      if (cell === EMPTY_CELL) continue;

      // 3. Get this cells square key.
      const squareKey = getSquareKey(rowIndex, columnIndex);

      // 4. Test if cell is already in its respective row, column, or square sets.
      // This is done by testing membership by using a set key.
      // So each set has a unique key that is based on the row, column, or square.

      if (
        (rowValues[rowIndex] && rowValues[rowIndex].has(cell)) ||
        (columnValues[columnIndex] && columnValues[columnIndex].has(cell)) ||
        (squareValues[squareKey] && squareValues[squareKey].has(cell))
      ) {
        return false;
      }

      // 5. If it isn't already in use, test if a set has already been created.
      // If it hasn't, then create a new set and add the cell to it.

      // Column
      columnValues[columnIndex] = columnValues[columnIndex] ?? new Set();
      columnValues[columnIndex].add(cell);

      // Row
      rowValues[rowIndex] = rowValues[rowIndex] ?? new Set();
      rowValues[rowIndex].add(cell);

      // Square
      squareValues[squareKey] = squareValues[squareKey] ?? new Set();
      squareValues[squareKey].add(cell);
    }
  }

  return true;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Default', () => {
    EXAMPLES.forEach((example) => {
      expect(isValidSudoku(example.input)).toEqual(example.output);
    });
  });
}
