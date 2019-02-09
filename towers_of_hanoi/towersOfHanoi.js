class TowersOfHanoi {

  constructor() {
    this.towers = [[1,2,3],
                   [],
                   []
                  ];
  }

  promptMove() {
    reader.question('Select desired start tower: ', (startTowerIdx) => {
      reader.question('Select desired end tower: ', (endTowerIdx) => {
        this.move(startTowerIdx, endTowerIdx);
        if (isWon()) {
          completionCallback();
        }
        else {
          run();
        }
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[startTowerIdx].length > 0 && endTowerIdx[0] > startTowerIdx[0]) {
      return true;
    }
    else {
      return false;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].shift());
      return true;
    }
    else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
    else {
      return false;
    }
  }

  run() {
    this.print();
    this.promptMove();
  }
}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new TowersOfHanoi();

game.promptMove();
