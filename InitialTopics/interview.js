// class sec{
//     constructor(name,rollno,marks){
//         this.name = name
//         this.rollno = rollno
//         this.marks = marks
//     }
// }
// let std1 = new sec("abc",34,64)
// console.log(std1)

//====================================================================================
//====================QUESTION-1======================================================
// function digitSum(num,N){
//     if (N < 0){return }
//     else {
//         let a = parseInt(num / (10**N))
//         sum += a
//         digitSum((num-(a*(10**N))),N-1)
//     }
//     return sum
// }

// let input = 12345;
// let num = input
// let str = input.toString()
// let N = str.length-1;
// let sum = 0

// console.log(digitSum(num,N))


// ===================================================================================
// ==================================QUESTION-2=======================================

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

// let arr = (readLine().split(" ")).map(Number)
// for (let i = 1 ; i < arr.length-1; i++){
//     let up = 0
//     let down = 0
//     for(let j = 0 ; j < i ; j++){
//         up += arr[j]
//     }
//     // console.log(up)
//     for (let j = arr.length-1 ; j > i ; j--){
//         down += arr[j]
//     }
//     // console.log(down)
//     if (up == down){console.log(i)}
// }


// let M = parseInt(readLine());
// let N = parseInt(readLine());
// let ansArr = []
// while (M--) {
//     let arr = readLine().split(" ").map(Number)
//     let i = 0
//     let j = 0
//     let k = 0
//     while (i < k && j < N) {
//         if(arrArr[i] <= arr[j]) {
//             ansArr[k] = arr[i];
//             i++; k++
//         }
//         else{
//             ansArr[k] = arr2[j];
//             j++; k++;
//         }
//         while (i < N) {
//             ansArr[k] = arr1[i];
//             i++; k++;
//         }
//     }
//     console.log(ansArr)
// }
// let string = readLine()
// let ans = []
// let count = 1;
// for (let i = 0 ; i < string.length ; i++){ // i = 2 c
//     for (let j = i+1 ; j < string.length ; j++){ // j = 3 c
//         if (string[i] == string[j]){  // a == b  c == c 
//             count++  // count 2 
//         }
//         else { 
//             if (count == 1){ans.push(string[i])} // ab
//             else {
//                 ans.push(string[i],count) ;
//                 count = 1;
//             }
//         }
//     }
// }
// console.log(ans.join(""))
// =======================================================================
// Which of the following prints the same output as the below code?
 
// let N = parseInt(readLine())
// let str = readLine()
// let vowels = ["a","e","i","o","u"]
// let count = 0
// for (let i = 0 ; i < vowels.length ;i++){
//     let flag = false
// 	for (let j = 0 ; j < N ; j++){
// 		if (vowels[i] == str[j]){ 
// 			flag = true
            
// 		}
// 	}
//     if(flag == true){count++}
// }
// // if(count == 5){console.log("YES")}
// // else {console.log("NO")}
// console.log(count)

