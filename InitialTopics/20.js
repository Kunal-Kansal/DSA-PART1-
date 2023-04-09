let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
let dec = false
let inc = false
let arr = []
for (let i = 0 ; i < n ; i++){
  let num = parseInt(readLine())
  arr.push(num)
}
for (let i = 0 ; i< n ; i++){
  if (arr[i] < arr[i+1]){inc = true}
  if (arr[i] > arr[i+1]){dec = true}
}
if (inc == true && dec == true){console.log("not a monotonic")}
else {console.log("monotonic sequence")}
