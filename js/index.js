"use strict";

let timerId = null;

function printNumbers(from, to, interval) {
  let count = from;
  timerId = setInterval(() => {
    if (count <= to) {
      console.log("count", count);
      count++;
    } else {
      clearInterval(timerId);
    }
  }, interval);
}

printNumbers(2, 5, 10);
