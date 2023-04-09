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
// let N = readLine().split(" ");
// let n = parseInt(N[0])
// let k = parseInt(N[1])
// let num = readLine().split(" ")
// let arr = []
// for (let i = 0 ; i < n ; i++){
//     arr.push(parseInt(num[i]))}

// for (let i = 0 ; i < arr.length ; i++){
//     let p = k
//     let q = arr.length-k+1
//     arr[k-1] = q
//     arr[arr.length-k] = p
//     console.log(arr[i])
// }



// for (let i = 0 ; i < n ; i++){
//     let p = k
//     let q = n-k+1
//     arr[k-1] = q
//     arr[n-k] = p
//     console.log(parseInt(arr[i]))
// }

// for(let i = 0 ; i< n ; i++){
    
// }
let N = readLine().split(" ");
let n = parseInt(N[0])
let k = parseInt(N[1])
let arr = readLine().split(" ")

for (let i = 0 ; i < n ; i++){
    let p = k
    let q = n-k+1
    arr[k-1] = q
    arr[n-k] = p
}

for(let i = 0 ; i< n ; i++){
    console.log(parseInt(arr[i]))
}

