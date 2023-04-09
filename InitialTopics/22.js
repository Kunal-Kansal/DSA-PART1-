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
let col = parseInt(readLine());
let arr = [];
for (let i = 0 ; i < col; i++ ){
    arr.push(readLine().split(" "))
}
let row = arr[0].length

let ans= []
for(let j= 0; j< row ; j++ ){
  let temp = []
  for (let i = 0 ; i< col ;i++){
    temp.push(arr[i][j])
  }
  ans.push(temp)
}

for (i = 0 ; i< ans.length ; i++){
  let str = ans[i].join(" ")
  console.log(str)
}