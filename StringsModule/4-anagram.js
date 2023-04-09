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
// wether string 1 is a nanagram of string 2 or not =========================
// let s1 = readLine()
// let s2 = readLine()
// function anagram(s1 ,s2){
//     if (s1.length !== s2.length){return 0}
//     let arr = []
//     for(let i =0 ; i < 123 ; i++){arr.push(0)}
//     for (let i =0 ;i < s1.length ;i++){
//         arr[s1.charCodeAt(i)]++
//     }
//     for (let i =0 ;i < s2.length ;i++){
//         arr[s1.charCodeAt(i)]--
//     }
//     for(let i = 0 ; i < arr.length ; i++){
//         if (arr[i] != 0){return 0}
//         return true
//     }
// }
// console.log(anagram(s1,s2))

// is the string has the similar pattern as given or not =========== 
// let string = "ABCDABCD"
// let pattern = "ABCD"
// let count = 0 
// for(let i = 0 ; i < string.length- pattern.length ; i++){
//     if (string[i] === pattern[0]){count += string.substring(i,pattern.length) === pattern}

// }
// console.log(count)
// let n=parseInt(readLine())
// let arr=[]
// let p=readLine().split(" ")
// for(let i=0;i<n;i++){
//     arr[i]=parseInt(p[i])
// }
// let count=0
// //console.log(arr)
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//             arr.splice(j,1)
//             break
//         }
//     }
// }
// console.log(count)

// ================================================================================
// ================================================================================
// ================================================================================


// let A = 10
// let a = new Set
// a.add(2)

// let arr = []
// for(let i = 2; i <= A; i++){
//     arr.push(i)
// }
// let arr2 = new Array(A).fill(false)
// arr2[2] = 2
// console.log(arr2)
// // for(let i = 3 ;i< A-1 ;i++){ 
// //     let flag = 0
// //     for(let j = 2 ; j < i ;j++){
// //         if(i % j == 0){
// //             flag = 1
// //             break
// //         }
// //     }
// //     if(i > 1 && flag == 0){
// //         a.add(i)
// //     }
// // }

// // console.log(a)
// // res = []
// // for (el of a) {
// //     const d = 10 - el;
// //     if (a.has(d)) {
// //         res.push(el);
// //         res.push(d);
// //         break;
// //     }
// // }
// // return res

// // for(i = 0 ; i < arr.length ;i++){
// //     let a = 
// // }

// ================================================================================
// ================================================================================
// ================================================================================
// ================================================================================
// A = 3
// B = 3
// let arr = []
// for(let i = 1 ; i <= A ; i++){
//     arr.push(i)
// }
// let num
// for(let i = 0 ; i < A ;i++){
//     num = 0
//     for(let j = 0 ; j < A ;j++){
//         if(j != i){num += arr[i]*(10**i)}
//         else{continue}
//     }
// }
// console.log(num)
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

// let A =  999999997
// let c = 0
// let a = BigInt(1)
// let b = BigInt(1)
// for(let i = 2 ; i < A ;i++){
//     c = (a + b)
//     a = b
//     b = c
//     c = parseInt(c) %((10**9)+7)
// }
// console.log(c)
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

let A = 10

let arr2 = new Array(A).fill(false)
let arr = []
for(let i = 0 ; i <= A ; i++){
    arr.push(i)
}
for(let )