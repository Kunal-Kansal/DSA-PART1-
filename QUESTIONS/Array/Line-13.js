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
//===================Kadane's Algorithm // Kadane's Algorithm====================
//===============================================================================
//===============================================================================


// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.
// Example 2:

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output: -1
// Explanation:
// Max subarray sum is -1 
// of element (-1)

//===============================================================================
//===============================================================================
//===============================================================================

let N = parseInt(readLine())
let arr = readLine().split(",").map(Number)
let max = Math.max(...arr)
let sum = 0
for(let i = 0 ; i < N ;i++){
    sum += arr[i]
}
if (sum > max){console.log(sum)}
else {console.log(max)} 
