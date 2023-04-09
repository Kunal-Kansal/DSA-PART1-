let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let N = readLine();
let arr = N.split("");
let L = arr.length
let ans = []
let num = parseInt(N)
for (let i = L-1 ; i>=0 ; i--){
    ans.push(arr[i]);
}let sol = (parseInt(ans.join("")))
if (num >= 0){console.log(sol)}
if (num < 0)(console.log((-1)*(sol)))
