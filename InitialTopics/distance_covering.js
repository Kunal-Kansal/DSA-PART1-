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

// function distance(start,target){
//     if (start>target){return 0}
//     else if(start == target){return 1}
//     else {
//         return distance(start+1,target)+distance(start+2,target) 
//     }
// }

// let t = parseInt(readLine())
// for (let i = 0 ; i < t ; i++){
//     let target = parseInt(readLine())
//     console.log(distance(0,target))
// }

function distance(n){
    if (n ==0 || n==1){return n}
    else{
        return distance(n-1)+distance(n-2)
    }
}


let t = parseInt(readLine())
for (let i = 0 ; i < t ; i++){
    let target = parseInt(readLine())
    console.log(distance(target+1))
}
