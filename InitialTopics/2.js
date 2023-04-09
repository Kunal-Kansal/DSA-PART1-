let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let N = parseInt(readLine());
let arrpix = [], arricon = []
for (let i = 0 ; i< N ; i++){
    arrpix.push(parseInt(readLine()))
}
let M = parseInt(readLine());
for (let j = 0 ; j< M ; j++){
    arricon.push(parseInt(readLine()))
}
// console.log(arricon)
let i = 0 , j = 0  // let j => arrpix , i=> arricon
let count = 0
while (j < N){
    if (arrpix[j] == arricon[i]){
        let x = j
        while(arrpix[j] == arricon[i]){
            i++
            j++
        }
        if (i >= arricon.length){
            count++
        }
        j = x + 1
        i = 0
    }
    else {
        j++
    }
}
console.log(count)

/*
10
7
27
31
8
9
10
25
8
9
11
2
8
9
*/