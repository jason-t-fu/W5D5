class Board {

  constructor() {
    this.board = new Array(3);
    this.board.forEach( (el) => {
      board[el] = new Array(3);
    });
  }

  won() {
    let transposed = this.board[0].map((col, i) => this.board.map(row => row[i]));

    this.board.forEach( row => {
      if (row.every( el => el === 'X' )) {
        return 'X';
      }

    });
    transposed.forEach( row => {
      if (row.every( el => el === 'X' )) {
        return true;
      }
    });

    return false;
  }

  winner() {

  }

  empty(pos) {

  }

  placeMark(pos, mark) {

  }

  checkRows() {

  }

  checkCols() {

  }

  checkDiag() {
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];

    if (diag1.every( el => el === "X") || diag2.every( el => el === "X")) {
      return "X";
    }
    else if (diag1.every( el => el === "O") || diag2.every( el => el === "O"))
  }
}