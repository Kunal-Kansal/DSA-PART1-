// let str = "wfewef efewfwe ewfew few"
// console.log(str.charAt(100),str[100])

// let arr = [1,2,3,4,5,6]
// let target = 6
// let mp = new Map()
// for(let i = 0 ; i < arr.length ; i++){
//     (mp.set(i,arr[i]))
//     // console.log(mp.get(arr[i]),i)

// }
//     console.log(mp.get(arr))

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// function OddNumber(arr,n){
//     let mp = new Map
//     for (let i = 0 ; i < arr.length ; i++){
//         if (mp.has(arr[i])){
//             mp.set(arr[i],mp.get(arr[i])+1)
//         }
//         else{
//             mp.set((arr[i]),1)
//         }
//     }
//     for(let i = 0 ; i <mp.length ;i++){
//         if (mp.get(arr[i])){}
//     }
// }

// let n = parseInt(readLine())
// const arr = readLine().split("")
// OddNumber(arr,n)

//==================================================================

// let num=parseInt(readLine())
// arr=readLine().split(" ").map(Number)
// let mp=new Map
// for(i=0;i<num;i++)
// {
//   if(mp.has(arr[i])){
//     mp.set(arr[i],mp.get(arr[i])+1)
//   }
//   else{
//   mp.set(parseInt(arr[i]),1)}
// }
// let n=parseInt(readLine())
// let sum=0
// for(i=0;i<n;i++)
// {
//   let first=readLine().split(" ")
//   let p=parseInt(first[0])
//   let q=parseInt(first[1])
//   if(mp.has(p))
//   {
//     if(mp.get(p)==0)
//     {
//       continue
//     }
//     else{
//       sum+=q
//       mp.set(p,mp.get(p)-1)
//     }
//   }

// }
// console.log(sum)
