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
// Example 1:

// Input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.
// Example 2:

// Input: 
// N = 3
// arr[] = {0 1 0}
// Output:
// 0 0 1
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.
//===============================================================================
//===============================================================================

let N = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
//----------------APPROACH-1 --------------------------------------
// for (let i = 0 ; i< N ; i++){
//     let min = i
//     for(let j = i+1 ; j < N ;j++){
//         if (arr[j] < arr[min]){min = j}
//     }
//     let temp = arr[min]
//     arr[min] = arr[i]
//     arr[i] = temp
// }
// console.log(arr)
//----------------APPROACH-2 --------------------------------------

let count0 = 0 ;
let count1 = 0 ;
let count2 = 0 ;

for(let i = 0 ; i<N;i++){
  if (arr[i] == 0){count0++}
  else if (arr[i] == 1){count1++}
  else if (arr[i] == 2){count2++}
}
for(let i = 0 ; i < N ;i++){
  if (count0 > 0){
    arr[i] = 0;
    count0--
  }
  else if (count1 > 0){
    arr[i] = 1;
    count1--
  }
  else if (count2 > 0){
    arr[i] = 2;
    count2--
  }
}
console.log(...arr)

