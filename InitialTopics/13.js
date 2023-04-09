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

let n = readLine();
let str = n.split("");
let a0 = parseInt(str[0]);
let a1 = parseInt(str[1]);
let a2 = parseInt(str[2]);
let num = parseInt(n);
if ((a0**3) + (a1**3) + (a2**3) == num){
    console.log("Yes")
}
else{
    console.log("No")
}