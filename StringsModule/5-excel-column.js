const { Console } = require("console");
let fs = require("fs");
const { toASCII } = require("punycode");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// console.log(String.fromCharCode(91-26)+String.fromCharCode(91-0))


// let t = parseInt(readLine())
// for(let i = 0 ; i < t ;i++){
//     let n = parseInt(readLine())
//     if (n<=26){
//         console.log(String.fromCharCode(91-n))
//     }
//     else if (n>26){
//         let one = Math.floor(n/26)
//         let two = n%26
//         console.log(String.fromCharCode(91-two)+String.fromCharCode(91-one))
//     }
// }
// let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// arr.reverse()
// // console.log(arr)
// let N = parseInt(readLine())
// for (let i = 0 ; i < N ; i++){
//     let ans 
//     let num = parseInt(readLine())-1
//     if (num < 26){ans = (arr[num])}
//     else if (num >= 26)
//     {ans = arr[Math.floor((num-26)/26)]+arr[num%26]
//     }
//     console.log(ans)
// }
function getAlph(n) {
    let revChar = ((26 - n - 1) + "A".charCodeAt(0));
    return String.fromCharCode(revChar);
}
let testCases = parseInt(readLine());
while (testCases--) {
    let n = parseInt(readLine());
    n -= 1;
    let col = "";
    while (n >= 0) {
        let mod = n % 26;
        col += getAlph(mod);
        n = parseInt(n / 26);
        n--;
    }
    col = col.split("").reverse().join("");
    console.log(col);
}