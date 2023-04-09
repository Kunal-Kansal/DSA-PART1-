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
// =========Write a program to reverse an array or string=======================
//===============================================================================
//===============================================================================
// Input  : arr[] = {1, 2, 3}    /////  1, 2, 3 
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2} ///// 4, 5, 1, 2
// Output : arr[] = {2, 1, 5, 4}

//==============================================================================

let arr = readLine().split(", ")
let ans = []
for(let i = 0 ; i < arr.length ; i++){
  ans[i] = arr[arr.length-i-1]
}
console.log(ans)