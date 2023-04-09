// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let num = 7;
let mark = false;
for (let i = 2 ; i < num ; i = i + 1)
{
    if (num % i == 0 )
    {
        console.log("not prime");
        mark = true;
        break;
    }
}

if (mark == false)
{
    console.log("PRIME")
}