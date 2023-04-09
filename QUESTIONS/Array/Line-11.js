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
//===================Union of two arrays=========================================
//===============================================================================
//===============================================================================

// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output: 
// 5
// Explanation: 
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.

// Example 2:

// Input:
// 6 2 
// 85 25 1 32 54 6
// 85 2 
// Output: 
// 7
// Explanation: 
// 85, 25, 1, 32, 54, 6, and
// 2 are the elements which comes in the
// union set of both arrays. So count is 7.

//==================================================================================
//==================================================================================

let numofarr = readLine().split(" ").map(Number);
let a = numofarr[0];
let b = numofarr[1];
let arr1 = readLine().split(" ").map(Number);
let arr2 = readLine().split(" ").map(Number);
let arr = arr1.concat(arr2);
let union = []
for(let i = 0 ; i <arr.length;i++){
    let count = 0;
    for(let j= i ; j<arr.length;j++){
        if (arr[i] == arr[j]){count++}
    }
    if(count == 1){union.push(arr[i])}
}
console.log(union.length)

