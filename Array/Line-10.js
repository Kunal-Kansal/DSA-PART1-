const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
//===============================================================================
//===============================================================================
//===================Move all negative numbers to beginning and positive to end with constant extra space===============================
//===============================================================================
//===============================================================================

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

//================================================================================

let arr = readLine().split(",").map(Number);
let ans = [];
for(let i = 0 ;i < arr.length ;i++){
    if (arr[i] < 0){ans.push(arr[i])}
}
for(let i = 0 ;i < arr.length ;i++){
    if (arr[i] >= 0){ans.push(arr[i])}
}
console.log(...ans)
