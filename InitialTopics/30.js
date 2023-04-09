const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let len = parseInt(readLine());
let arr = [];
for (let i = 0 ; i < len ; i++){
    let num = readLine().split(" ")
    for (let j = 0 ; j < len ; j++){
        num[j] = parseInt(num[j])
    }
    arr.push(num)
}

for (let i = 0 ; i < len ; i++){
    if (arr[i][i] >= 0){arr[i][i] = 1}
    else if (arr[i][i] < 0){arr[i][i] = 0}
}
for (i = 0 ; i < arr.length ; i++){
    let str = arr[i].join(" ")
    console.log(str)
}