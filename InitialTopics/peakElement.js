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

let n = parseInt(readLine()); 
for (let i = 0; i < n; i++) {
    let m = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    let flag = 0;
    let peak = 0;
    for (let j = 1; j < m; j++) 
    {
        if (arr[peak] > arr[j] && j == 1)
        {
            flag = 1;
            break;
        }
        else if (((arr[j - 1] < arr[j]) && (arr[j] > arr[j + 1])))
        {
            flag = 1;
            peak = j; 
            break;
        }
    }
    if (m == 1)
        console.log(peak + 1);
    else if (flag == 0)  
    {
        if (arr[m - 1] > arr[m - 2]) {  
            console.log(m);  
        }
        else {
            console.log(-1); 
        }
    }
    else if (flag == 1) {
        console.log(peak + 1);
    }
}


// let t = parseInt(readLine())
// for (let j = 0 ; j < t ; j++){
//         let N = parseInt(readLine())
//     let n = readLine().split(" ");
//     let count = 0;
//     if (N == 1){
//         console.log(1);
//         count++
//     }
//     for (let i = 0; i < N; i++) {
//         n[i] = parseInt(n[i])
//     }
//     for (let i = 0; i < N; i++) {
//         if (i == 0) {
//             if (n[i] > n[i + 1]) {
//             console.log(i + 1);
//             count++;
//             break
//         }
//     }
//     if (i == N - 1) {
//         if (n[i] > n[i - 1]) {
//             console.log(i + 1);
//             count++;
//             break
//         }
//     }
//     else {
//         if (n[i] > n[i + 1] && n[i] > n[i - 1]) {
//             console.log(i + 1);
//             count++;
//             break
//         }
//     }
// }
// if (count == 0) { console.log(-1) }

// }

