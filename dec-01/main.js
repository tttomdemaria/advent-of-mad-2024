const fs = require("fs");

const file = fs.readFileSync(`../puzzle-input/dec-01.txt`, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
});

let arrOne = [];
let arrTwo = [];
let accumulator = 0;

const puzzleData = file.split("\n").map(e => e.replace("\r", ""));

puzzleData.forEach(e => {
  const tempArr = e.split("  ");
  console.log(e);
  arrOne.push(tempArr[0]);
  arrTwo.push(tempArr[1]);
});

arrOne.sort();
arrTwo.sort();

arrOne.forEach((e, idx) => {
  // console.log(Number(arrOne[idx]), "  ", Number(arrTwo[idx]));
  accumulator += orderNums(Number(arrOne[idx]), Number(arrTwo[idx]));
});

function orderNums(input1, input2) {
  // console.log(input1, " ", input2);
  console.log(Math.max(input1, input2) - Math.min(input1, input2));
  return Math.max(input1, input2) - Math.min(input1, input2);
}

console.log(accumulator);
