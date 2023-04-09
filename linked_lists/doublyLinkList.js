class Node {
    constructor(element) {
        this.data = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
    }
    insertAtStart(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node
        }
        else {
            let curr = this.head;
            curr.prev = node;
            node.next = curr;
            this.head = node;

        }

    }
    insertAtEnd(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node
        }
        else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next
            }
            curr.next = node;
            node.prev = curr
        }
    }
    insertAtpos(value, pos) {

        if(pos == 0){
            this.insertAtStart(value)
        }
        else{
            let node = new Node(value);
            let curr = this.head;
            pos--
            while (pos > 0 && curr.next != null) {
                curr = curr.next
                pos--
            }
            let future = curr.next
            curr.next = node;
            node.prev = curr;
            node.next = future
            future.prev = node
        }

    }
    deleteAtStart() {
        if(this.head == null){
            console.log("nothing to delete")
        }
        else {
            let curr = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            curr.next = null;
            curr = null
        }

    }
    deleteAtEnd() {
        if(this.head == null){
            console.log("nothing to delete")
        } else if (this.head.next == null){this.head =null}
        else {
            let curr = this.head
            let past = null
            while(curr.next != null){
                past = curr
                curr = curr.next
            }
            // curr.prev = null;
            past.next = null;
            curr = null;
        }

    }
    deleteAtPos(pos) {
        if(this.head == null){
            console.log("nothing to delete")
        } else if (this.head.next == null){this.head =null}
        else {
            pos--
            let curr = this.head
            while(pos > 0){
                curr = curr.next
                pos--
            }
            let future = curr.next;
            curr.next = future.next;
            future.prev = curr;
            future.next = null;
            future.prev = null;
            future = null;
        }

    }
    printList() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next
        }
    }
}

let DDL = new DoublyLinkList()
DDL.insertAtStart(4)
DDL.insertAtStart(3)
DDL.insertAtStart(2)
DDL.insertAtStart(1)
DDL.insertAtEnd(5)
DDL.insertAtpos("A", 4)
// DDL.deleteAtEnd()
DDL.deleteAtPos(1)
DDL.printList()