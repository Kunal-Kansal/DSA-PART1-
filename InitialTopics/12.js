let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let arr = readLine().split("");
let L = arr.length
let ans = false
for (let i = 0 ; i< L ; i++){
    let nums = parseInt(arr[i])
    if (arr[i] == arr[L-1-i]){ans = true}
    else {ans = false}
}
console.log(ans)