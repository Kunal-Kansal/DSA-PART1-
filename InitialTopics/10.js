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
let n = parseInt(readLine());
let bas = 1  // mentiong the start number like in 0 the pyramid will start from 0 
for (i = 0 ; i <= n ; i++)
{
    S = ""
    for (j = (n-1); j >= i ; j--)
    {
        S += " "
    }
    for (k = bas ; k < i ; k++)
    {
        S += k
    }
    for (k = i ; k >= bas ; k--)
    {
        S += k
    }
    console.log(S)
}