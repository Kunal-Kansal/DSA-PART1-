//single
/*
sefewsdf
*/
let fs = require("fs")
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readline() {
    idx++;
    return data[idx - 1].trim();
}


// console.log(myName)
// console.log("Hello Bro")
// let offer = readline();
// console.log("would you like to have "+offer )
// let gst = parseInt(readline());
// finalans = (unit+(unit*gst)/100)
// console.log(finalans)
let a = parseInt(readline());
let b = parseInt(readline());
let c = parseInt(readline());
d = (b-a)
ans = (a + (b-a)*d)
console.log(ans)
