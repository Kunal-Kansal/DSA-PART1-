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

function codeSum(n,sum){
    if (n==code.length){console.log(sum)}
    else{
        codeSum(n+1,sum+code[n])
    }
}

let code = readLine().split("");
for(let i=0;i<code.length;i++){
    code[i]= parseInt(code[i])
}
codeSum(0,0)