let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1]
}

let n = parseInt(readLine());
let max = parseInt(readLine());
let m = parseInt(readLine());
let nums = []
for (let i = 0 ; i < m ; i++){
    nums.push(parseInt(readLine()))
}
count = 0 
let arr = []
for ( let i = 0 ; i <= n ; i++){
    arr.push(0)   // by doing so we are actually calculating the max no. of times the m is repeated
}
for (let i = 0 ; i < m ; i++){
    let input = nums[i];
    arr[input]++;
    console.log(arr)
    if (arr[input] == max){
        count = input
        break
    }
}
console.log(count)