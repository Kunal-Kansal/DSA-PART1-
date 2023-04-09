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

// check wether the letter is capital 

let x = "W"
if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90){console.log(`${x} is capital`)}
// console.log(x.charCodeAt(0))

// same code can be applied in numbers ,special characters 
// like for small letters == 97 - 122
// for numbers = 48 - 57 0 - 9
// else it will be special character

