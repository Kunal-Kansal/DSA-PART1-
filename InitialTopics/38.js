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


// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class InputReader {
	//implement the methods here 
    readStrings(num){
        for (let i = 0 ; i<num ;i++){
            let nums = readLine()
            console.log(i + " " + nums)
        }
    }
    readIntegers(num){
        for (let i = 0 ; i<num ;i++){
            let nums = parseInt(readLine())
            console.log(i,nums)
        }
    }
    readFloats(num){
        for (let i = 0 ; i<num ;i++){
            let nums = parseFloat(readLine()).toFixed(2)
            console.log( i , nums)
        }
    }
};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
if (typeOfInput === "string") {
		NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers(num);
} else {
		NewInputReader.readFloats(num);
}