const fs = require("fs");

const fileData = fs.readFileSync(`../puzzle-input/dec-02.txt`, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
});

let accumulator = 0;

const reports = fileData.split("\r\n");

reports.forEach(el => {
  accumulator += checkIncrement(el.split(" "));
});

function checkIncrement(a) {
  let isIncreasing = false;
  if (a[0] < a[1]) isIncreasing = true;
  for (let i = 0; i < a.length; i++) {
    if (i > 0) {
      const min = Number(a[i - 1]) - 3;
      const max = Number(a[i - 1]) + 3;
      if (a[i] < a[i - 1] && isIncreasing) return false;
      if (a[i] > a[i - 1] && !isIncreasing) return false;
      if (a[i] > max && isIncreasing) {
        return false;
      }
      if (a[i] < min && !isIncreasing) {
        return false;
      }
    }
  }
  return true;
}
console.log(accumulator);
