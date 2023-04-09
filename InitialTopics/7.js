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
// let C = parseInt(readLine());
let A1 = [];
// let A2 = [];
for (let i = 0 ; i < R; i++ ){
  let SA = readLine().split(" ")
    A1.push(SA)
}
let C = A1[0].length
let ans= []
for(let j= 0; j< C ; j++ ){
  let temp = []
  for (let i = 0 ; i< R ;i++){
    temp.push(A1[R-1-i][j])
  }
  ans.push(temp)
}

for (i = 0 ; i< ans.length ; i++){
  let str = ans[i].join(" ")
  console.log(str)
}