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

let num = parseInt(readLine());
for (i = 0 ; i <= num ; i++)
{
    let temp = " "
    for ( j = num ; j >= i; j--)
    {
        temp += " "
    }
    for ( k = 0 ; k <= i ; k++ )
    {
        temp += "* "
    }
    console.log(temp)
}
for (i = (num-1) ; i >= 0 ; i--)
{
    let temp = " "
    for ( j = num ; j >= i; j--)
    {
        temp += " "
    }
    for ( k = 0 ; k <=i  ; k++ )
    {
        temp += "* "
    }
    console.log(temp)
}
