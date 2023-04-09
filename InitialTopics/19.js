let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let f = readLine().split(" ");
let L = f.length
let m = parseInt(readLine());
for (let i = 0 ; i < m ; i++ ){
  let x = f.unshift(f.pop()) 
}
for (let i = 0 ; i < L ; i++ ){
  console.log(f[i])
}

//  INPUT
//let the series 2 1 3 4 5 10 
// let num = 2 


// ** problem is to rotate the series clockwise num times and single number should be 
// in every line like

// OUTPUT 
// 5
// 10
// 2
// 1
// 3
// 4
