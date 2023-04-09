// ASSIGNING THE VALUE TO DIFFERENT VARIABLE
let first = []
let second = []
for ( i = 0 ; i < 5 ; i++){
    first.push(i)
}
for (let j = 5 ; j < 10 ; j++){
    second.push(j)
}
console.log(first)
console.log(second)
second = first
console.log(second[1]++)


// SWAPING THE VALUES 
let a = 1 
let b = 2 
// now we need to give a the value of 2 and b the value of 1
let temp = a 
a = b 
b = temp
console.log(a)
console.log(b)

