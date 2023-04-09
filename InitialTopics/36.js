// const { Console } = require("console");
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// function odd(){
//   let arr = []
//   for(let i = 0 ; i < N1.length ; i++){
//     let flag = false
//     for(let j = 0 ; j <N2.length ; j++){
//       if (N1[i] == N2[j]){flag = true;break}
//       else {flag = false}
//     }
//     if (flag == false ){arr.push(N1[i])}
//   }
//   return arr
// }

// let N1 = readLine().split(" ")
// let N2 = readLine().split(" ")
// console.log(odd())
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function integer_converetr(Num){
  if (Num == Length){return Multiply}
  else {elements[Num] = parseInt(elements[Num])
    Multiply *= elements[Num]
    integer_converetr(Num+1)
  }
}
function multiply(i){
  Multiply = 1 
  if (i == n ){return}
  else {
    elements = readLine().split("")
    Length = elements.length
    integer_converetr(0)
    console.log(Multiply);
    multiply(i+1)
  }
}
let n = parseInt(readLine())
multiply(0)