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
//===============================================================================
//===============================================================================
//===================Sort an array of 0s, 1s and 2s===============================
//===============================================================================
//===============================================================================
// let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// arr.reverse()
// // console.log(arr)
// let N = parseInt(readLine())
// for (let i = 0 ; i < N ; i++){
//     let ans 
//     let num = parseInt(readLine())-1
//     if (num < 26){ans = (arr[num])}
//     else if (num >= 26)
//     {ans = arr[Math.floor((num-26)/26)]+arr[num%26]
//     }
//     console.log(ans)
// }
// let N = parseInt(readLine())
// let ans = []
// for (let i = 0 ; i < N ; i++){
//     if (i==0){(ans.push(0))}
//     else if (i==1){(ans.push(1))}
//     else if (i>=2){ans.push(ans[i-1]+ans[i-2])}
// }
// if (ans = 0){
//     console.log(-1)
// }
// else {
//     for (let i of ans){
//         console.log(i)
//     }
// }


// let A = [0, 1];
// let B = [0, 1];
// let N = A.length
// let count = 0

// for(let i = 0 ; i <N-1 ;i++){
//     let countA = 0
//     let countB = 0
//     for(let j = i+1 ; j<N;j++){
//         if (Math.abs(A[i] - A[j]) === Math.abs(B[i] - B[j])){
//             count += Math.abs(A[i] - A[j])
//         }
//         else if {
//             count += Math.abs(Math.abs(A[i] - A[j]) - Math.abs(B[i] - B[j]))
//         }
//     }
        
// }
// console.log(count)



