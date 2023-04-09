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
//===================Minimize the Heights II=====================================
//===============================================================================
//===============================================================================

//Example 1:

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {3, 3, 6, 8}. The difference between 
// the largest and the smallest is 8-3 = 5.
// Example 2:

// Input:
// K = 3, N = 5
// Arr[] = {3, 9, 12, 16, 20}
// Output:
// 11
// Explanation:
// The array can be modified as
// {6, 12, 9, 13, 17}. The difference between 
// the largest and the smallest is 17-6 = 11. 

//===============================================================================
//===============================================================================

const nums = readLine().split(" ").map(Number);
const K = nums[0];
const N = nums[1];
let arr = readLine().split(",").map(Number);
let minarr = [];
let maxarr = [];
for(let i = 0 ; i< N;i++){
    minarr[i] = arr[i] + K
}
for(let i = 0 ; i< N;i++){
    if (arr[i] > K){maxarr[i] = arr[i] - K}
    else {maxarr[i] = arr[i] + K}
}
let minofminarr = Math.min(...minarr);
let maxofminarr = Math.max(...minarr);
let minofmaxarr = Math.min(...maxarr);
let maxofmaxarr = Math.max(...maxarr);

// console.log(minarr);
// console.log(maxarr);

let lastmax;
let lastmin;
if(minofminarr>minofmaxarr){lastmin = minofminarr}
else {lastmin = minofmaxarr}
if (maxofmaxarr<maxofminarr){lastmax = maxofmaxarr}
else {lastmax = maxofminarr}

console.log(lastmax-lastmin);