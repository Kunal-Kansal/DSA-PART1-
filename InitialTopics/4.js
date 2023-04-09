let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1]
}

let S = parseInt(readLine());
let E = parseInt(readLine());
let count = 0
for (let num=S;num<=E;num++)
{
    let STM = false;
    for (let i = 2; i <num ; i++ )
    {
        if (num % i == 0 )
        {
            STM = true;
        }
    }
    if (STM == false)
    {
        console.log(num)
        count++
    }

}

console.log("total prime no. b/w " + S + " and " + E + " are " + count)