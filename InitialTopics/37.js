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

// let test = parseInt(readLine())
// for (let k = 0 ; k < test ; k++){
// let N = parseInt(readLine()) 
// let nums = readLine().split(" ")
// for (let i = 0 ; i < N ; i++){
//   nums[i] = parseInt(nums[i])
// }
// let ans = []
// let i = 0
// while(i<N){
//   let mul = 1
//   for(let j = 0 ; j <N ; j++){
//     if (j != i){mul *= nums[j]}
//     else if(j == i){continue}
//   }ans.push(mul)
//   i++
// }
// console.log(...ans)}


let test = parseInt(readLine())
for (let k = 0 ; k < test ; k++){
let N = parseInt(readLine()) 
let nums = readLine().split(" ")
if (N == 1){console.log(1)}
else {
for (let i = 0 ; i < N ; i++){
  nums[i] = parseInt(nums[i])
}
let ans = []
let i = 0
while(i<N){
  let mul = 1
  for(let j = 0 ; j <N ; j++){
    if (j != i){mul *= nums[j]}
    else if(j == i){continue}
  }ans.push(mul)
  i++
}
console.log(...ans)}}