let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let A = []
for (let i = 0 ; i < n; i++ ){
  let num = parseInt(readLine())
  A.push(num)
}
let max = -Infinity
let mul = 0
for (i = 0 ; i < n ;i++){
  mul = A[i] * A[i+1]
  if (max < mul){max = mul}
}
console.log(max)

/*
let series = 2 3 4 5 6 7
2*3 compared to 3*4 and so on until the heighest multiple of 2
 cosecutive numbers is found out of series
 */
