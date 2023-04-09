let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = readLine();
let str = n.split("");
let sum = 0;
let pro = 1;
let len = str.length;
for (i = 0 ; i < len ; i++){
    let a = parseInt(str[i]);
    sum += a
    pro = pro * a 
}console.log(pro - sum)