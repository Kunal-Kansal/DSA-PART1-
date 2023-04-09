const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let N = parseInt(readLine()) , arr = [] ,ans =[]
let nums = readLine().split(" ");
for(let i= 0 ; i < N ; i++ ){
    nums[i] = parseInt(nums[i])
    arr.push(nums[i])
}
for (let i = 0 ; i < N-1 ; i++){
    let flag = true
    for (let j = i+1 ; i < N ;j++){
        if (arr[i] >= arr[j]){
            flag = false
            break
        }
    }if (flag == true){ans.push[arr[i]]}
}
console.log(ans)
