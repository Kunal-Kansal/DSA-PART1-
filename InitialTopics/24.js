let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let N = parseInt(readLine());
let ans = false
for (let i = 1 ; i <= N; i++ ){
    let num = parseInt(readLine())
    if (num == 2){ans = true}
    else {
    for (let j = 2 ; j < num ; j++){
        let mod = num % j
        if (mod != 0){ans = true}
        if (mod == 0){ans = false; break;}
    }
    }
    if(ans == true){console.log("Yes its a prime")}
    if(ans == false){console.log("No its not a prime")}
}