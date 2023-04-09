// let A =  [ 0, 0, -1, 0 ];
// let N = A.length;
// let maxSum = 0 , maxArr = [];
// let arr = [];
// for(let i = 0 ; i < N ;i++){
//     let sum = 0 ;
//     arr = [];
//     for(let j = i ; j < N ;j++){
//         if(A[j] >= 0 ){
//             sum += A[j];
//             arr.push(A[j]);
//         }
//         if(A[j] < 0 || j == N-1){
//             if(maxSum < sum ){
//                 maxSum = sum;
//                 maxArr = arr;
//             }
//             if(maxSum == sum){
//                 if (maxArr.length < arr.length){maxArr = arr}
//             }  
//             i = j++;
//             break;
//         }
//     }
// }
// console.log(maxArr)

