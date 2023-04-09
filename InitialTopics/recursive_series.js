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

function Num(i){
    if (i <= 9){return i}
    else{
        if(i % 2 == 0 ){return Num(i-10)}
        else {return Num(i - 9)}
    }
}

function RSeries(n){
    if (n == length){return}
    else {
        console.log(Num(parseInt(readLine())))
        RSeries(n+1)
    }
}

let length = parseInt(readLine())
RSeries(0)

