const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// // -------- Do NOT edit anything above this line ----------
let nums = readLine().split(",")
let max = 2
arr = []
for (let i = 0 ; i < nums.length ; i++){
    arr.push(parseInt(nums[i]));
}
let ans = [2,3]

let length = arr.length
// let count = 0
// let ans = []
// for (let i = 0 ; i < length ; i++){
//     for (let j = 0 ; j < i ; j++){
//         if (arr[i] == arr[j]){
//             ans.push(arr[i])
//         }
//     }
// }console.log(ans)

for (let i = 0 ; i < length ; i++ ){
    for (let j = 0 ; j < ans.length ; j++){
        if (ans[j] == arr[i]){
            arr - arr[i]
        }
    }
}
console.log(arr)