N = 6
arr = [1, 4, 3, 2, 6, 7]
function maxJumps(arr,count,idx,N,val){
    if(arr[idx] == 0){return -1}
    val += arr[idx]
    if(val >= N){return count}
    count++
    return maxJumps(arr,count,arr[idx],N,val)
}

console.log(maxJumps(arr,0,0,N,0))