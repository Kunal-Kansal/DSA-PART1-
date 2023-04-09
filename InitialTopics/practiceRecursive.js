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

// function sequence(target,current,i){
//     let sumProduct = 1
//     let j
//     if (current-1 == target){return sumProduct-1}
//     else{
//         for(j = i ; j< current+i ; j++){
//             sumProduct *= j
//         }
//         return (sumProduct + sequence(target, current +1 ,j))
//     }
// }

// let t = parseInt(readLine());
// for(let i=0;i<t;i++){
//     let target = parseInt(readLine())
//     console.log(sequence(target,1,1))
// }

// let amt = parseInt(readLine());
// let year = parseInt(readLine());
// let multiply = amt
// for (let i = 0 ; i < year ; i++){
//     let percent = multiply/10;
//     multiply = multiply+percent
// }
// console.log(parseInt(multiply + (amt/10)))

let n = parseInt(readLine())
for (let j = 0; j < n; j++) {
    let count = 0
    let num = []
    num = readLine().split(" ")
    for (let i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i])
    }
    num.sort()
    count += num[1]
    let count2 = Math.ceil((num[2] - num[1]) / 2)
    count += count2
    console.log(count)
}