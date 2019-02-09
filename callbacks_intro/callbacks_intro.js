//Global reader
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});  


// Part 1 Clock
class Clock {

  constructor () {
    let timeNow = new Date();
    this.hours = timeNow.getHours();
    this.minutes = timeNow.getMinutes();
    this.seconds = timeNow.getSeconds();
    this._tick = this._tick.bind(this);
    this.printTime();

    setInterval(this._tick, 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 13) {
      this.hours = 1;
    }
    this.printTime();
  }
}

const clock = new Clock();

// ----------------------------------

// // Part 2 Add Numbers

// function addNumbers(sum, numsLeft, completionCallback) {
  
//   if (numsLeft > 0) {
//     reader.question("Enter a number: ", (answer) => {
//       let num = parseInt(answer, 10);
//       sum += num;
//       console.log(sum);
//       numsLeft--;
//       addNumbers(sum, numsLeft, completionCallback);
//     });
//   }
  
//   return completionCallback(sum);
// }

// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
// });

// ----------------------------------

// Part 3 Absurd Bubble Sort

let askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, (answer) => {
    if (answer === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    console.log(i);
    askIfGreaterThan(arr[i], arr[i + 1], (swapBool) => {
      if (swapBool) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true; 
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else {
    console.log(arr);
    outerBubbleSortLoop(madeAnySwaps);
  }
}

let absurdBubbleSort = (arr, sortCompletionCallback) => {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
};

absurdBubbleSort([3,5,1,6,2,3,7], (arr) => {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// ----------------------------------

// Part 4 My Bind

Function.prototype.myBind = function(func) {
  return () => {
    this.apply(func);
  };
  // let that = this;

  // return function() {
  //   that.apply(func);
  // };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
// const anotherBound = turnOn.apply(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
