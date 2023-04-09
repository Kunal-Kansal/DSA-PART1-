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
let n = parseInt(readLine())
let arr = []
for (let i = 0 ; i < n ; i++){
    let num = (readLine().split(" "))
    for (let j = 0 ; j < n ; j++){
        num[j]= parseInt(num[j])
    }
    arr.push(num)
}
let arr1 = []
for (let i = 0 ; i< n ; i++){
    arr1.push(arr[i][i])
}
let arr2 = []
for (let i = 0 ; i< n ; i++){
    arr2.push(arr[i][n-i-1])
}
let sum1 = 0 
for (let i = 0 ; i < n ; i++){
    sum1 += arr1[i]   
}
let sum2 = 0 
for (let i = 0 ; i < n ; i++){
    sum2 += arr2[i]   
}
console.log(sum1+sum2)