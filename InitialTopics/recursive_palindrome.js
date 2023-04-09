const { Console } = require("console");
const { reverse } = require("dns");
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

function palinDrome(string,l,r){
  if (l >= r) {return true}
  return string[l]== string[r] && palinDrome(string,l+1,r-1)
}

let n = parseInt(readLine())
for(let i = 0 ; i < n ; i++){
    let string = readLine()
    let ans = (palinDrome(string,0,string.length-1))
    if (ans== true){
      console.log ("True")
    }
    else{
      console.log("False")
    }
}
