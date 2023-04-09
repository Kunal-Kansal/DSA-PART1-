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

//==================bubble-sort===========================
// function bubbleSort(arr){
//     for (let i = 0 ; i <arr.length-1 ;i++){
//         for(let j= 0 ; j < arr.length-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// let arr = readLine().split("").map(Number)
// console.log(bubbleSort(arr))
//=========================================================
//======================selection-sort=====================
// function selectionSort(arr){
//     for(let i = 0 ; i< arr.length-1;i++){
//         let minIndx = i
//         for(let j = i+1 ; j < arr.length ;j++)
//         if (arr[j] < arr[minIndx]){
//             minIndx = j
//         }
//         let temp = arr[i]
//         arr[i] = arr[minIndx]
//         arr[minIndx] = temp
//     }
//     return (arr)
// }
// let arr = readLine().split("").map(Number)
// console.log(selectionSort(arr))
//===========================================================
//=======================Merge-sort==========================

// let arr1 = readLine().split("").map(Number).sort()
// let arr2 = readLine().split("").map(Number).sort()
// let ans = [];
// let i = 0;
// let j = 0;
// let k = 0;
// let n1 = arr1.length;
// let n2 = arr2.length;
// while (i < n1 && j < n2) {
//     if (arr1[i] <= arr2[j]) {
//         ans[k] = arr1[i]
//         i++; k++;
//     } 
//     else {
//         ans[k] = arr2[j];
//         j++; k++;
//     }
// }
// while (i < n1) {
//     ans[k] = arr1[i]
//     i++; k++;
// }
// while (j < n2) {
//     ans[k] = arr2[j];
//     j++; k++
// }
// console.log(ans)


//===========================================================
//========================insertion-sort=====================
// function insertionSort(arr){
//     for(let i = 1 ; i < arr.length ; i++){
//         let key = arr[i]
//         let j = i-1
//         while (j >=0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
// let arr = readLine().split("").map(Number)
// console.log(insertionSort(arr))
//===========================================================
//=========================Quick-sort========================
// function partition(arr,low,high){
//         let pivot = arr[high];
//         let i = (low-1)
//         for(let j = low ; j < high ; j++){
//             if (arr[j] < pivot){
//                 i++;
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//         let temp = arr[i+1]
//         arr[i+1] = arr[high]
//         arr[high] = temp
//     return (i+1)
// }
// function quickSort(arr , low, high){
//     if (low < high){
//         let pi = partition (arr,low,high)
//         quickSort(arr,low,pi-1)
//         quickSort(arr,pi+1,high)
//     }
//     return arr
// }    
// let arr = readLine().split("").map(Number)
// console.log(quickSort(arr,0,arr.length-1))

//============TARGET INSERTION IN A SORTED ARRAY=================
// function insert(len, target, arr) {
//     for (let i = 0; i < len; i++) {
//       if (arr[i] >= target) {
//         let temp = arr[i];
//         arr[i] = target;
//         target = temp;
//       }
//     }
//     arr.push(target);
//     return arr.join(" ");
//   }
//   let input = readLine().split(" ").map(Number);
//   let len = input[0];
//   let target = input[1];
//   let Arr = readLine().split(" ").map(Number);
//   console.log(insert(len, target, Arr));