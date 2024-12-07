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
let partTwoAccum = 0;

const puzzleData = file.split("\n").map(e => e.replace("\r", ""));

puzzleData.forEach(e => {
  const tempArr = e.split("  ");

  arrOne.push(tempArr[0]);
  arrTwo.push(tempArr[1]);
});

arrOne.sort();
arrTwo.sort();

arrOne.forEach((e, idx) => {
  accumulator += orderNums(Number(arrOne[idx]), Number(arrTwo[idx]));
});

function orderNums(input1, input2) {
  return Math.max(input1, input2) - Math.min(input1, input2);
}

console.log("Part One: ", accumulator);

// arrOne.forEach(e => console.log(+e));

arrOne = arrOne.map(e => e.trim());
arrTwo = arrTwo.map(e => e.trim());

arrOne.forEach((e, idx) => {
  const count = arrTwo.reduce((acc, val, ridx) => acc + Number(val.toString() === e.toString()), 0);
  if (idx > 985 && e == 99168) console.log(`The number ${e} occurs ${count} times`);
  partTwoAccum += +e * count;
});

console.log("Part Two: ", partTwoAccum);

arrf = ["2", "4", "2", "6", "5", "3"];
arrg = ["5", "2", "3", "1", "5", "2"];

console.log(arrTwo.slice(0, 4));
console.log(arrf.slice(0, 4));

arrf.forEach((e, idx) => {
  const count = arrg.reduce((acc, value) => acc + (value === e), 0);
  console.log(`The number ${e} occurs ${count} times`);
});
