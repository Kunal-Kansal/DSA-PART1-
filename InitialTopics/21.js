let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
N = parseInt(readLine())
let A = []
let sum = 0
let sum2 = 0
for (let i = 0 ; i< N ;i++){
  let num = parseInt(readLine())
  A.push(num)
}
for (let i = 0 ; i < N ;i++){
  if (i%2 == 0){
    sum += A[i]
  }
}
for (let i = 0 ; i < N ;i++){
  if (i%2 != 0){
    sum2 += A[i]
  }
}
console.log(sum - sum2)


/*
if a1 , a2 , a3 , a4 is given 
do a1-a2+a3-a4 and so on 
*/
