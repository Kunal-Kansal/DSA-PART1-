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

function Factorial(n){
    if (Num < 0){Multiply = undefined}
    if (n > Num){return}
    else {
        Multiply *= n
        Factorial(n+1)
    }
}

let Num = parseInt(readLine())
let Multiply = 1
Factorial(1)
console.log(Multiply)