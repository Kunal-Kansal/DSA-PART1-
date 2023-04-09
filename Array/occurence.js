// A =[ 4, -9, 8, 5, -1, 7, 5, 3 ]
// N = A.length;
// let mp = new Map;
// for(let i = 0 ; i < N; i++){
//     if(mp.has(A[i])){
//         mp.set(A[i],mp.get(A[i])+1)
//     }
//     else{
//         mp.set(A[i],1)
//     }
// }
// let arr = []



// // arr = Array.from(mp.keys()).sort((a,b) => a-b).map((e) =>{ return mp.get(e)});

// arr = Array.from(mp.keys());
// arr = arr.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0)).map((i) => {return mp.get(i)})



// console.log(arr)
// let mp = new Map
// A = A.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// let count = 0
// let flag = false
// for(let i = 0 ; i < A.length ;i++){
//     if(A[i] !== A[i+1]){
//         count = A.length -1-i
//         if (count == A[i]){
//             flag = true; 
//             break;
//         }
//         else {
//             flag = false
//         }
//     }
// }
// if(flag === true){console.log(1)}
// else if (flag === false){console.log(-1)}
// for(let i = A.length-1 ; i >= 0 ; i--){
//     if(mp.has(A[i])){
//         mp.set(A[i],mp.get(A[i])+1 )
//     }
//     else {
//         mp.set(A[i],1)
//     }
// }

// for(let i = 1 ; i < mp.size ;i++){
//     mp.set(Array.from(mp.keys())[i],(mp.get(Array.from(mp.keys())[i]))+(mp.get(Array.from(mp.keys())[i-1])))
// }

// console.log(mp)

// let arr = Array.from(mp.keys())

// arr.reverse()
// let flag = false
// for(let i = 0 ; i < arr.length ; i++){
//     if (arr[i] == mp.get(arr[i])){
//         flag = true;    
//         break;
//     }
// }

// if(flag == true){console.log(1)}
// else {console.log(-1)}}

let A = ["dig1-8-1-5-1", "let1-art-can", "dig0-3-6", "let2-own-kit-dig", "let3-art-zero"]


// if(48 >= A[0][1][0] && A[0][1][0] <= 57){console.log("num")}

let lett = [];
let dig = []

for(let i = 0 ; i < A.length ;i++){
    A[i] = A[i].split("-")
    if(A[i][0][0] == "d" ){dig.push(A[i])}
    else if (A[i][0][0] == "l"){lett.push(A[i])}
}
dig.sort((a,b) => a[1][0] - b[1][0])
lett.sort((a,b) => a[1][0] > b[1][0])
console.log(lett)