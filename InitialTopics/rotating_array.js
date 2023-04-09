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
let Rotations = parseInt(readLine())
let Array = readLine().split(" ")
let Ans = Array
// if (Rotations % Array.length == 0){console.log(Ans)}

    let Net = Rotations % Array.length
    let element = Ans.splice(Array.length-Net,Array.length-1)
    const ans = element.concat(Ans)
    console.log(ans)

