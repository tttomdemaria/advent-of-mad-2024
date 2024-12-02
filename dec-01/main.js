const fs = require("fs");

const input = fs.readFileSync(`../puzzle-input/dec-01.txt`, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
});

const puzzleData = input.split("\n").forEach(el => {
  return el.split(" ");
});
