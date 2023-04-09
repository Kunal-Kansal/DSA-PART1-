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

function hack(start,target){
    if (start==target){return true}
    if (start>target){return false}
    else{
        return hack(start*10,target) || hack(start*20,target)
    }
}

let N = parseInt(readLine());
for(let i = 0 ; i <N ; i++){
    let element= parseInt(readLine())
    let ans = hack(1,element)
    if (ans == true){console.log("Yes")}
    else{console.log("No")}
}
