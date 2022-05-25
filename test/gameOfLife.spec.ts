import {Board} from '../src/board';

describe('The game of life should', () => {
  it('Count alive cells', () => {
    const board = new Board(3,3);
    board.setCell(0, 0, true);
    board.setCell(0, 1, true);
    board.setCell(0, 2, true);

    expect(board.countAliveCells(0, 0)).toBe(1);
    expect(board.countAliveCells(0, 1)).toBe(2);
    expect(board.countAliveCells(0, 2)).toBe(1);
  });
   it('Count alive neighbours cells', () => {
       const board = new Board(3, 3);
       board.setCell(0, 0, true);
       board.setCell(0, 1, true);
       board.setCell(0, 2, false);
       board.setCell(1, 0, false);
       board.setCell(1, 1, false);
       board.setCell(1, 2, true);
       board.setCell(2, 0, true);
       board.setCell(2, 1, false);
       board.setCell(2, 2, true);
     expect(board.countAliveNeighbours(1, 1)).toBe(5);
   });

   it('Change the state of the cells', () => {
    const board = new Board(3, 3);
    board.setCell(0, 0, true);
    board.setCell(0, 1, true);
    board.setCell(0, 2, false);
    board.setCell(1, 0, false);
    board.setCell(1, 1, false);
    board.setCell(1, 2, true);
    board.setCell(2, 0, true);
    board.setCell(2, 1, false);
    board.setCell(2, 2, true);

    const resultBoard = new Board(3,3);
    resultBoard.setCell(0,1,true);
    resultBoard.setCell(1,0,true);
    resultBoard.setCell(1,2, true);
    resultBoard.setCell(2,1,true);

    expect(board.changeStateofCells(board)).toStrictEqual(resultBoard);
   })
});
