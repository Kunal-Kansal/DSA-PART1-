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
// let n = parseInt(readLine())
// let arr =[]
// for(let i = 0 ;i<n ;i++){
//     arr.push(parseInt(readLine()))
// }
// for(let i =0 ; i < n ;i++){
//     arr[i] = arr[i]**2
// }
// for(let i = 0 ; i < n ;i++){
//     let min = i
//     for(let j =0 ;j <n-1;j++){
//         if (arr[j] > arr[min]){
//             min = j
//         }
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
// }
// for(let i=0;i<n;i++){
//     console.log(arr[i])
// }




let N = readLine().split(" ")
let length = parseInt(N[0])
let strlength = parseInt(N[1])
let count = 0
let arr =[]
for(let i =0 ;i < length ;i++){
    arr.push(readLine())
}

for (let i = 0; i < strlength; i++) {
    let mark = 0;
    for (let j = 0; j < length - 1; j++) {
        if (arr[j][i] > arr[j + 1][i]) {
            mark = 1;
            break;
        }
    }
    if (mark == 1) {
        count++
    }
}
console.log(count)