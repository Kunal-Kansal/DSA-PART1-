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
let n = parseInt(readLine()); // no. of dials
let max = parseInt(readLine()); // max limit of the dials
let m = parseInt(readLine()); // no. of inputs
let arr = []
for (i = 0 ; i < m ; i++){
    let int = parseInt(readLine())
    arr.push(int)
}
let result = 0
let arr2 = []
for (i = 0 ; i <= n ; i++){
    arr2.push(0)
}
for (let i = 0 ; i < m ; i++){
    let input = arr[i];
    arr2[input]++;
    if (arr2[input] == max){
        result = input
        break
    }
}
console.log(result)

/*
3
4
7
1
3
1
1
3
2
1
*/