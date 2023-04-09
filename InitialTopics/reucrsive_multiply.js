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


function multiply(i){
  if (i<10){return mul *= i}
  else{
    mul *= (i%10)
    multiply(parseInt(i/10))
  }
}
function answer(n){
  mul = 1
  if (n == length){return }
  else{
    multiply(Math.abs(readLine()))
    console.log(mul)
    answer(n+1)
    
  }
}
let length = parseInt(readLine())
answer(0)