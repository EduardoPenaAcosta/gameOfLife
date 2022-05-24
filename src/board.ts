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

  public countAliveNeighbours(x: number, y:number): number {
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
}
export {Board};
