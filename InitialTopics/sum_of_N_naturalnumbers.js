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

function NaturalNumbers(number){
    sum += number
    if (number > num){return}
    else{console.log(number , sum);
        NaturalNumbers(number+1)}
    
}

let num = parseInt(readLine())
let sum = 0
NaturalNumbers(1)