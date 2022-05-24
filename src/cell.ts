class Cell {
  private isAlive: boolean = false;

  constructor(isAlive: boolean) {
    this.isAlive = isAlive;
  }

  public getIsAlive(): boolean {
    return this.isAlive;
  }

  public setIsAlive(state : boolean): void {
    this.isAlive = state;
  }
}

export {Cell};
