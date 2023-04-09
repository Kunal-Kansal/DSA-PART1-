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
function targetsum(nums,key,N,currSum,currPos,took){
    if (currSum > key || currPos >N){return 0}
    else if (currPos == N){
        if( currSum == key){return 1}
        else {return 0}
    }
    let ways = 0;
    if (took == 0 ){
        ways += targetsum(nums, key ,N ,currSum , currPos+1 , 0)
    }
    ways += targetsum(nums, key ,N ,currSum +nums[currPos] , currPos +1 , 0)

    if (currSum + nums[currPos] < key){
        ways += targetsum(nums, key ,N ,currSum + nums[currPos] , currPos , 1)
    }
    return ways
} 


let st = readLine().split(" ");
let N = parseInt(st[0])
let key = parseInt(st[1])
let nums = readLine().split(" ").map(Number)
nums.sort()
let currSum = 0;
let currPos = 0;
let took = 0;
console.log(targetsum(nums,key,N,currSum,currPos,took))

