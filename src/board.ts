import {Cell} from './cell';

class Board {
  private readonly width: number = 0;
  private readonly height: number = 0;
  private grid: Cell[][] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = this.createInitialGrid();
  }
  public createInitialGrid(): Cell[][] {
    const grid: Cell[][] = [];
    for (let i = 0; i < this.width; i++) {
      grid[i] = [];
      for (let j = 0; j < this.height; j++) {
        grid[i][j] = new Cell(false);
      }
    }
    return grid;
  }

  public setCell(x: number, y: number, isAlive: boolean): void {
    this.grid[x][y].setIsAlive(isAlive);
  }

  public getCellAlive(x : number ,y : number): boolean {
    return this.grid[x][y].getIsAlive();
  }

  public getAllCellBoard(x: number, y: number): number {
    return (x *y);
  }

  public countAliveCells(x: number, y:number): number {
    let count = 0;
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        if ((i === x && j === y) || i < 0 || j < 0 ||
        i >= this.width || j >= this.height) {
          continue;
        }
        if (this.grid[i][j].getIsAlive()) {
          count++;
        }
      }
    }
    return count;
  }

  public countAliveNeighbours(x: number, y: number): number {
    let count = 0;
    const cell_neighbours = [[x-1, y-1], [x-1, y], [ x -1, y + 1],
                             [x, y - 1 ], [x , y + 1],
                             [ x + 1, y - 1], [x + 1, y], [x + 1, y + 1]];

    for (let i = 0; i < cell_neighbours.length; i++) {
      if (cell_neighbours[i][0] >= 0 && cell_neighbours[i][0] < 3 
        && cell_neighbours[i][1] >= 0 && cell_neighbours[i][1] < 3 
        && this.grid[cell_neighbours[i][0]][cell_neighbours[i][1]].getIsAlive()) {
        count++;
      }
    }
    return count;
  }

  public changeStateofCells(board: Board): Board {

    const boardResult = new Board(3,3);

    for(let i = 0; i < 3 ; i++) {
      for(let j = 0; j < 3 ; j++) {
        const cellsAlive = this.countAliveNeighbours(i,j);
        console.log(board.getCellAlive(i,j))
        if (board.getCellAlive(i,j)) {
          if (cellsAlive < 2 || cellsAlive > 3) {
            boardResult.setCell(i, j, false);
          }
          else if (cellsAlive == 2 || cellsAlive == 3) {
            boardResult.setCell(i, j, this.grid[i][j].getIsAlive());
          }
        }
        else {
          if (cellsAlive == 3) {
            boardResult.setCell(i, j, true);
          }
        }
      }
      
    }


    return boardResult;
  }
}
export {Board};
