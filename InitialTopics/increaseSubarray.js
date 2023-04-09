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

let N = parseInt(readLine())
let n = readLine().split(" ");
for (let i = 0 ; i < N ; i++){
    n[i] = parseInt(n[i])
}
let arr1 = [] , arr2 = [];
let startInd = 0 ;
let endInd = 0;
for (let j = 0; j < N; j++) {
    arr1 = arr2;
    arr1 = []
    arr1.push(n[j])
    for (let i = j; i < N; i++) {
        if (n[i] < n[i+1]) {arr1.push(n[i+1])}
        else {break}
    }
    if (arr1.length > arr2.length) {
        arr2 = arr1;
        startInd = j;
        endInd = j+arr2.length-1;
    }
}
console.log(arr2.length, startInd, endInd)
