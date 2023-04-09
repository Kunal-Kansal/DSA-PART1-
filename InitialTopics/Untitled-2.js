let fs = require("fs")
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readline() {
    idx++;
    return data[idx - 1].trim();
}
let customername = readline();
let customerorder = readline();
console.log("Hello " + customername + " !!!");
console.log("You ordered " + customerorder + ".")
