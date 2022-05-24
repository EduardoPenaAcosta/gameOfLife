import {Board} from '../src/board';

describe('The game of life should', () => {
  it('Count alive cells neighbours', () => {
    const board = new Board(3, 3);
    board.setCell(1, 1, true);
    board.setCell(0, 2, true);
    board.setCell(2, 1, true);

    expect(board.countAliveNeighbours(0, 0)).toBe(1);
    expect(board.countAliveNeighbours(1, 1)).toBe(2);
    expect(board.countAliveNeighbours(2, 2)).toBe(2);
  });
});
