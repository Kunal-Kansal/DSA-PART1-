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
//=======Maximum and minimum of an array using minimum number of comparisons=====
//===============================================================================
//===============================================================================
// Input: arr[] = {3, 5, 4, 1, 9}  /////////   3, 5, 4, 1, 9
// Output: Minimum element is: 1
//         Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3} ///////////   22, 14, 8, 17, 35, 3
// Output:  Minimum element is: 3
//          Maximum element is: 35

//===============================================================================
//===============================================================================

let arr = readLine().split(", ")
let max = -Infinity
let min = Infinity
for(let i = 0 ; i < arr.length ; i++){
    if (arr[i] > max){max = arr[i]}
    if (arr[i] < min){min = arr[i]}
}
console.log("Minimum element is: "+ min)
console.log("Maximum element is: "+max)