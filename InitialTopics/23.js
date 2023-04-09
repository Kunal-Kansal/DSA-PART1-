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
let R = parseInt(readLine());
let C = parseInt(readLine());
let A1 = [];
let A2 = [];
for (let i = 0 ; i < R; i++ ){
  let SA = readLine().split(",")
  for (let j = 0 ; j <C ; j++){
    SA[j] = parseInt(SA[j])
  }A1.push(SA)
}console.log(A1)

for (let i = 0 ; i < R; i++ ){
  let SA = readLine().split(",")
  for (let j = 0 ; j <C ; j++){
    SA[j] = parseInt(SA[j])
  }A2.push(SA)
}console.log(A2)

let ans = []
for (let i = 0 ; i < R; i++ ){
  let SA = [];
  for (let j = 0 ; j <C ; j++){
    SA.push((A1[i][j])+ (A2[i][j]))
  }ans.push(SA)
}console.log(ans)

// 3
// 4
// 1,2,3,4
// 5,6,7,8
// 9,10,11,12
// 13,14,15,16
// 17,18,19,20
// 21,22,23,24