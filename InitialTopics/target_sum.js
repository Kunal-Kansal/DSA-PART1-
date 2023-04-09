const { Console } = require("console");
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

// function distance(start,target){
//     if (start>target){return 0}
//     else if(start == target){return 1}
//     else {
//         return distance(start+1,target)+distance(start+2,target) 
//     }
// }
function targetSum(nums,pos,key,subans,ans){
    if (key == 0){return ans.push(subans)}
    else if (key < 0){ return;}
    else if (pos == N){ return;}

    targetSum(nums,pos,key-(nums[pos]),subans.push(nums[pos]),ans); //include
    targetSum(nums,pos+1,key,subans,ans); // exclude
}

let input = readLine().split(" ");
let N = parseInt(input[0]); 
let key = parseInt(input[1]);
let nums = readLine().split(" ").map(Number);
nums.sort();
let subans = []
let ans = []
console.log(targetSum(nums,0,key,subans,ans))
