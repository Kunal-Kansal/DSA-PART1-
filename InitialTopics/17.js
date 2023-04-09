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
let n = parseInt(readLine());
let F0 = 0; 
let F1 = 1;
for (let i=1 ; i < n ; i++){
    let sum = F0 + F1
    F0 = F1
    F1 = sum
}
console.log(F1)