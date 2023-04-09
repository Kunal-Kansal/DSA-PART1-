let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
if (n === 1 ){console.log(1)}
else{
  let arr1 = [1]
  for(let i = 1 ; i < n ; i++){
    let arr2 = []
    let col = i+1
    for (let j = 0 ; j <col ; j++){
      if (j == 0){arr2.push(1)}
      else if (j == i){arr2.push(1)}
      else {arr2.push(arr1[j]+arr1[j-1])}
    }
    arr1 = arr2
  }
  for(let i = 0 ; i < arr1.length ;i++){console.log(arr1[i])}
}

