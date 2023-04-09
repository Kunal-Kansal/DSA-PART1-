let A = [1,2,4,5,6,7,8,8,10]

A = A.sort((a,b) => (a-b))// 
// // let element = 2
// // console.log(A[A.length-element])

let max1 = -Infinity;
let max2 = -Infinity
let maxidx = 0;
for(let i = 0 ; i < A.length ; i++){
    if(A[i] >= max1){
        max2 = max1
        max1 = A[i];// 1
        maxidx = i;
    }
    else if(A[i] >= max2 ){
        max2 = A[i]
    }
}

console.log(max2)