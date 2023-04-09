const { Console } = require("console");
let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let arr = []
for (let i = 0 ; i< n ; i++){
    let int = parseInt(readLine())
    arr.push(int)
}
let m = parseInt(readLine())
let ans = []
ans.push(...arr)
for (i = 0 ; i < m ; i++){
    let p = 0
    let q = ans.length-1
    let aa = []
    while (p<q){
        aa.push(ans[p] + ans[q])
        p++
        q--
    }
    if (p == q){
        aa.push(ans[p])
    }
    ans = aa
}
console.log(ans.length) // tellings the length of ans array

for (let k = 0 ; k < ans.length ; k++){
    console.log(ans[k])
}
// for showing the ans in a line rather than an array

