let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// ------------------------------------------------


let n = parseInt(readLine());
let max = -Infinity
let min = Infinity
for (i=1 ; i <= n ;i++){
    let num = parseInt(readLine());
    if (num < min){min = num};
    if (num > max){max = num};
}
console.log(min)
