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
//==================Find the Duplicate Number====================================
//===============================================================================
//===============================================================================


// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


//===============================================================================
//===============================================================================


let nums = readLine().split(",").map(Number)

for(let i = 0 ; i < nums.length ;i++){
    let count = 0;
    for(let j = i +1 ; j<nums.length;j++){
        if (nums[i] === nums[j]){
            count++
            break
        }
    }
    if (count === 1){
        console.log(nums[i]);
        break;
    }
}