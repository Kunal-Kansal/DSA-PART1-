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
let n = readLine().split("")
let sum = 0
let substring = ''
for(let i = 0 ; i < n.length ;i++){
    if(n[i]=="+"){
        substring = parseInt(substring)
        sum += substring
        substring = ''
    }
    if(n[i] == "-"){
        substring = parseInt(substring)
        sum += substring
        substring = ''
    }
    else {
        substring += n[i]
    }
}
console.log(sum + parseInt(substring))

