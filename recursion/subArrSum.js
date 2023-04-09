N = 10, S = 15
A = [1,2,3,4,5,6,7,8,9,10]


function SubArr(Arr, start, end, S,sum) {
    if (start == end) { return -1 }
    let idx = start
    for (let i = start; i < end; i++) {
        if (sum < S) { 
            sum += Arr[i] 
            idx = i+1
        }
        else {break}
    }
    // if(idx == end ){retun -1}
    let ans = [start+1,idx]
    if (sum == S) { return ans }
    return SubArr(Arr, start + 1, end,S,0)
}

// SubArr(A, 0, N, 12)
console.log(...(SubArr(A, 0, N, S,0))) 