let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let min = Infinity
for (i=1 ; i <= n ;i++){
    let num = parseInt(readLine());
    if (num < min){min = num};
}
let sum = 0
while(min>0){
sum  += min%10
min = Math.floor(min/10);
}
console.log(sum)