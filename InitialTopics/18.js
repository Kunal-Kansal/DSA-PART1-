let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
console.log(n)
let names = []
for (let i=0 ; i<n;i++){
    names.push(readLine())
}
console.log(names);

let q = parseInt(readLine())
console.log(q)
let queryL = []
for (let i=0 ; i<q;i++){
    queryL.push(readLine())
}
console.log(queryL);

for (let i = 0 ; i<q;i++){
    let query = queryL[i];
    let found = false;
    for (let j = 0; j<n ; j++){
        if (query == names[j]){
            console.log(query +" available");
            found = true;
        
        }
    }
    if (found == false){
        console.log(query + " not available")
    }
}



