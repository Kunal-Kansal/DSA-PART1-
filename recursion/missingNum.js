N = 10
A = [6,1,2,8,3,4,7,10,5]

function missingNum(num,arr){
    if(num < 1){return 0}
    let flag = false
    for(let i = 0 ; i < N-1 ;i++){
        if(num == arr[i]){
            flag = true
            break 
        }
    }
    if(flag == false){return num}
    return missingNum(num+1,arr)
}

console.log(missingNum(1,A))
