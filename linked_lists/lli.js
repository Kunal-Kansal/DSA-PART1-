class Node {
    constructor(ele) {
        this.prev = null;
        this.data = ele;
        this.next = null;
    }
}
// let node1 = new Node(10)
// let node2 = new Node("4")
// node1.next = node2
// node2.prev = node1
// console.log(node1)
// console.log(node2)

class LL {
    constructor() {
        this.head = null
    }
    insertatstart(value) {  
        let node = new Node(value)
        if (this.head == null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node;
        }

    }
    insertatend(value) {
        let node = new Node(value)
        if (this.head == null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node
        }
    }
    inseratpos(value,pos) {
        let node = new Node(value)
        if(pos == 0){
            node.next = this.head;
            this.head = node
        } else{
            let curr = this.head;
            let prev = null
            while(pos > 0){
                prev = curr
                curr = curr.next;
                pos--;
            } 
            node.next = curr;
            prev.next = node;
        }

    }
    deleteatstart() {
        let curr = this.head
        this.head = this.head.next;
        curr.next = null; 

    }
    deleteatend() {
        let curr = this.head;
        let prev = null
        while(curr.next != null){
            prev = curr
            curr = curr.next
        }
        prev.next = null
    }
    deleteatpos(pos) {
        let curr = this.head
        if(pos == 0){
            this.head = this.head.next
            curr.next = null
        }else {
            let prev = null 
            while(pos > 0 ){
                prev = curr
                curr = curr.next 
                pos--
            }
            prev.next = curr.next
            curr.next = null
        }

    }

    printlist() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }

    }
}
function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}
function detectLoop1(head){
    let curr = head;
    let S = new Set;
    while(curr.next != null){
        if(S.has(curr)){
            return true
        }else{
            S.add(curr)
        }
        curr = curr.next
    }
    return false
}
function detectLoop2(head){
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true
        }
        return false
    }
}
function reverseLL(head){
    let prev = null;
    let curr = head;
    let future = null;
    while(curr!= null){
        future = curr.next;
        curr.next = prev;
        prev = curr;
        curr = future
    }
    head = prev
    let temp = head;
        while(temp != null){
        console.log(temp.data);
        temp = temp.next
        }
}
let L1 = new LL()
L1.insertatstart(1)
// L1.insertatstart(2)
// L1.insertatstart(3)
// L1.insertatstart(4)
// L1.insertatstart(5)

// L1.inseratpos(5,1)
// L1.deleteatpos(2)

// L1.printlist()

// console.log()

// reverseLL(L1.head)

console.log(findMiddle(L1.head))
// console.log(findMiddle(L1.head))

