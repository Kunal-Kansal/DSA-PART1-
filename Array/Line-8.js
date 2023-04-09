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
//===================Kth smallest element===============================
//===============================================================================
//===============================================================================
// Example 1:

// Input:
// N = 6  
// arr[] = 7 10 4 3 20 15
// K = 3
// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.

// 6
// 7 10 4 3 20 15
// 3

// Example 2:

// Input:
// N = 5
// arr[] = 7 10 4 20 15
// K = 4
// Output : 15
// Explanation :
// 4th smallest element in the given 
// array is 15.

//5
//7 10 4 20 15
//4

//===============================================================================
//===============================================================================

let N = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
let K = parseInt(readLine())
//----------------APPROACH-1 --------------------------------------
for (let i = 0 ; i< N ; i++){
    let min = i
    for(let j = i+1 ; j < N ;j++){
        if (arr[j] < arr[min]){min = j}
    }
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
}
console.log(arr[])
//----------------APPROACH-2 --------------------------------------