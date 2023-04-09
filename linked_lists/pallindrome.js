let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 


class Node{ 
    constructor(value){ 
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{ 
  constructor(){ 
      this.head = null;
  }
    push(new_value){ 
        let new_node = new Node(new_value)
        if(this.head === null){
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node; 
    }

    isPalin(){
        //WRITE CODE HERE
                let arr1 = []
        let curr = this.head
        while(curr != null){
            arr1.push(curr.data)
            curr = curr.next
        }
        let i = arr1.length-1
        curr = this.head
        while(curr != null){
            if(curr.data == arr1[i]){
                i--;
                curr = curr.next
            }
            else {
                return "False"
            }
        }
        return "True"
		

    }
}

function readListInput(){
    let vals = readLine().split(" ");
    linkedList = new LinkedList(); 
    for(let val of vals){
        linkedList.push(val);
    }
    return linkedList;
}
let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    let linkedList = readListInput();
    console.log(linkedList.isPalin());
}