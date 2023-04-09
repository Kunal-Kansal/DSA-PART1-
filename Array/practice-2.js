const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// // -------- Do NOT edit anything above this line ----------
// // let A = [
// //     [ 1, 2, 3 ],
// //     [ 4, 5, 6 ],
// //     [ 7, 8, 9 ]
// // ]
// // let M = A.length;
// // let N = A[0].length;
// // let arr = [];
// // let right = N-1;
// // let down = M-1;
// // let left = 0;
// // let up = 0;
// // let k = M-1
// // while(k--){
// //     for(let j = up ; j < right ;j++){
// //         arr.push(A[left][j])
// //     }up++
// //     for(let j = left ;j < down ;j++){
// //         arr.push(A[j][right])
// //     }
// //     for(let j = right ; j > left ; j--){
// //         arr.push(A[right][j])
// //     }right--
// //     for(let j = down ; j >= up ;j--){
// //         arr.push(A[j][left])
// //     }down--;left++
// // }
// // console.log(arr)


// let A = [0, -1];
// let B = [0, 1];
// let N = A.length
// let count = 0

// for(let i = 0 ; i <N-1 ;i++){
//     for(let j = i+1 ; j<N;j++){
//         if (A[i] && B[i] && A[j] && B[j] >= 0){
//             let countA = Math.abs(A[i] - A[j])
//             let countB = Math.abs(B[i] - B[j])
//             if (countA === countB){
//                 count += countA
//                 j = N-1
//             }
//             else if (countA < countB){
//                 count += countB
//                 j = N-1
//             }
//             else if (countA > countB){
//                 count += countA
//                 j = N-1
//             }
//         }
//     }
// }
// console.log(count)

// let A = [   [1, 0, 1],
// [1, 1, 1], 
// [1, 0, 1]   ]

// let M = A.length;
// let N = A[0].length;

// let X = new Set()
// let Y = new Set()
// for(let i = 0 ; i < M ;i++){
//     for(let j = 0 ; j < N ;j++){
//         if(A[i][j] == 0){
//             X.add(i)
//             Y.add(j)
//         }
//     }
// }
// for(let i = 0 ; i < M ; i++){
//     for(let j = 0 ; j < N ;j++){
//         if(X.has(i) || Y.has(j)){
//             A[i][j] = 0
//         }
//     }
// }

// console.log(A)

// let A = [
//     [1, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2],
//     [3, 8, 6, 7, 3],
//     [4, 4, 4, 4, 4],
//     [5, 5, 5, 5, 5],
// ]
// let B = 3
// let maxsum = 0
// let sum 

// let C = 0;
// while (C <= A.length-B) {
//     let D = 0
//     while (D<= A.length-B){
//     sum = 0 
//     for (let i = C; i < C + B; i++) {
//         for (let j = D; j < D + B; j++) {
//             sum += A[i][j]
//         }
//     }
//     if (sum >= maxsum) { maxsum = sum }
//     // console.log(sum)
//     D++
//     }C++
// }
// return maxsum

// A = [[1,2],[3,5],[6,7],[8,10],[12,16]]
// B = [4,9]

// let arr = []
// arr.push(A[0])
// for(let i = 0 ; i < A.length ; i++){
//     if(arr[i][0] < B[0]){
//         if(arr[i][1] < B[0]){
//             arr.push[i+1]
//         }
//         else if (arr[i][1] >= B[0]){
//             arr[i][1] = B[1]
//         }
//     }
// }
// console.log(arr[0][0])





// let A = [ "0.366507", "0.234601", "2.126313", "1.372403", "2.022170", "0.308558", "2.120754", "1.561462" ]

// let arr  = A.map(Number)
// let flag = 0
// let mp = new Map


// for(let i = 0 ; i < A.length  ;i++){
//     mp.set(arr[i],1)
// }
// arr = A.sort((a, b) => a-b).map(Number)
// let ans = []
// ans.push(arr[0])
// ans.push(arr[1])
// ans.push(arr[2])

// let sum = parseFloat((ans[0] + ans[1] + ans[2]).toFixed(12))

// for(let i = 3 ; i < arr.length ;i++){
//     if (sum > 1 && sum < 2){
//         flag = 1
//         break
//     }
//     else if (sum >= 2){
//         ans[2] = arr[i]
//     }
//     else if (sum <= 1){
//         ans[2] = arr[i]
//     }
//     sum = parseFloat((ans[0] + ans[1]+ans[2]).toFixed(12))
// }
// console.log(flag)
// let ans = parseFloat((arr[0]+arr[1]+arr[2]).toFixed(12))
// console.log(ans)



// {let N = parseInt(readLine())
// let mp = new Map
// for(let i = 0 ; i < N ; i++){
//     let num = readLine().split(" ").map(Number)
//     mp.set(num[0],num[1])
// }
// let S = Array.from(mp.keys())
// let count = 0
// let count2 = 0
// for(let i = 0 ; i < mp.size ;i++){
//     for(let j = 0 ; j < mp.size ;j++){
//         if(mp.get(S[i]) >= S[j]){count++}
//         if(S[i] <= mp.get(S[j])){count2++}
//     }
// }if(count > count2){console.log(S.length-count2)}
// else {console.log(S.length-count)}
// }


// {
//     let arr = readLine().split(" ").map(Number)
//     let n = parseInt(readLine())-1
//     // for(let i = 0 ; i< arr.length ; i++){
//     if (n < 0 || n >= arr.length){console.log(-1)}
//     else {console.log(arr[n])}
//     // }
// }

// function getElementAt(arr,n){
//     if (n < 0 || n >= arr.length){return -1}
//     else {return arr[n]}
// }

// let t = parseInt(readLine())
// while (t--)
// {
//     let arr = readLine().split(" ").map(Number)
//     let n = parseInt(readLine()) - 1
//     console.log(getElementAt(arr,n))
// }


// function getElementAt(n, arr) {
// 	n = n-1
// 	    if (n < 0 || n >= arr.length){return -1}
//         else {return arr[n]}
// }

// -------- Do NOT edit anything below this line ----------


// let A = [
//     [1, 2],
//     [3, 4]
//   ]
//   let arr = []
//   for (let i = 0; i < A.length; i++) {
//       let a = []
//       for (let j = 0; j < A.length; j++) {
//           a[j] = A[A.length - 1 - j][i]
//       }
//       arr.push(a)
//   }
// console.log(arr)

// let A = [["Bob", "80"], ["Bob", "90"], ["Alice", "90"], ["Alice", "10"]]
// let mp = new Map 
// for(let i = 0 ; i < A.length ; i++){
//     if(mp.has(A[i][0])){
//         mp.set(A[i][0],mp.get(A[i][0])+parseInt(A[i][1]))
//     }
//     else {
//         mp.set(A[i][0],parseInt(A[i][1]))
//     }
// }
// let arr = Array.from(mp.keys())
// let mp2 = new Map

// for(let i = 0 ; i < A.length ;i++){
//     if(mp2.has(A[i][0])){
//         mp2.set(A[i][0],mp2.get(A[i][0])+1)
//     }
//     else {
//         mp2.set(A[i][0],1)
//     }
// }
// let max = 0 
// for(let i = 0 ; i < mp.size ;i++){
//     let num = mp.get(arr[i])/mp2.get(arr[i])
//     if(num > max){max = num}
// }
// max = parseInt(max)
// console.log(max)

// let A = [0, 1, 2, 5]
// let B = 2
// let C = 21 
// let count = 0 
// for(let i = 0 ; i< A.length ;i++){
//     let arr = ""
//     arr += i
//     for(let j = 0 ; j < i ;j++){
//         arr +=  
//     } 
//     for(let j = i+1 ; j < A.length ;j++){

//     }
// }

// A = 9247
// let a = new Set
// const isPrime = num => {
//     let count = 2;
//     while(count < (num / 2)+1){
//        if(num % count !== 0){
//           count++;
//           continue;
//        };
//        return false;
//     };
//     return true;
//  };
//  const primeBetween = (A) => {
//     for(let i = 2; i <= A; i++){
//        if(isPrime(i)){
//           a.add(i);
//        };
//     };
//     return a;
//  };
//  primeBetween(A)

//===========================================================================c
//===========================================================================c
//===========================================================================c
//===========================================================================c
//===========================================================================c

// A = 9247
// let mult 
// for(let i = A ; i> 0 ; i--){
//     if(i%5 != 0 ){continue}
//     else if (i % 5 == 0){
//         mult = i/5
//         A = i
//         break
// }
// }
// console.log(mult)
// mult += (Math.floor(A /(1000)))
// console.log(mult)

// X = A.toString()
// for(let i = X.length-1 ; i > 1 ;i--){
//     mult+=(Math.floor(A /(10**i)))
// }

//===========================================================================c
//===========================================================================c
//===========================================================================c
//===========================================================================c

// sum = 0
// if (A.length > 1){
//     for(let i = 0 ; i < A.length ;i++){
//         a = A[i]
//         for(let j = 0 ; j < A.length ; j++){
//             b = A[j]
//             sum += a-b
//             console.log(a-b)
//         }
        
//     }
// }
// A = 4
// let flag = 0
// let floor = Math.floor(Math.sqrt(A))
// let ceil = Math.ceil(Math.sqrt(A))
// let num =  Math.ceil(A/2)
// if(floor == ceil){flag = 1}
// else{
//     for(let i = 2 ; i <= num ;i++){
//         if(A**(1/i) === parseInt(A**(1/i))){flag = 1}
//     }
// }
// console.log(flag)

// A = "ghcl"
// let length = A.length ;
// A = A.split("")
// let str = [...A]
// A = A.sort()
// let count = 1
// let mult = 1
// for(let i = 1 ; i <= length ; i++){
//     mult *= i
// }
// let flag = false
// for(let i = 0 ; i < mult ;i++){

// }

let A = 16777214
let a = []
n = A
for(let i=0;i<=n;i++) a[i]=1;


    a[0]=0;

    a[1]=0;

    for(let i=2; i<=A; i++) {

        if(a[i]==1) {

            for(let j=2;i*j<=A; j++) {

                a[i*j]=0;

            }

        }

    }
let arr = []

    for(let i=2;i<A;i++) {

        if(a[i]==1 && a[A-i]==1 ) {
            arr.push(i)
            arr.push(A-i)
            break

        }
    }

console.log(arr)

//==================================================================
// let a = new Set
// let arr2 = []
// for (let i = 0; i <= A; i++) {
//     arr2.push(i)
// }
// arr2[0] = false
// arr2[1] = false
// for (let i = 2; i < arr2.length; i++) {
//     if (i != false) {
//         for (let j = i + 1; j < arr2.length; j++) {
//             if (arr2[j] % arr2[i] == 0) { arr2[j] = false }
//         }
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] != false) { a.add(arr2[i]) }
// }


// res = []
// for (el of a) {
//     const d = A - el;
//     if (a.has(d)) {
//         res.push(el);
//         res.push(d);
//         break;
//     }
// }
// return res

