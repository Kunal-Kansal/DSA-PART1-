class Node{
    constructor(element){
        this.data = element;
        this.next = null
    }
}
class SinglyCircularLinkList{
    constructor(){
        this.head = null;
    }
    insertAtStart(){
        let node = new Node(value);
        if(this.head == null){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next != this.head){
                curr = curr.next
            }
            node.next = this.head;
            this.head = node;
            curr.next = this.head;
        }

    }
    insertAtEnd(){
        let node = new Node(value);
        if(this.head == null){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next != this.head){
                curr = curr.next
            }
            curr.next = node;
            node.next = this.head;
        }
    }
    insertAtPos(value,pos){
        if(pos == 0){
            this.insertAtStart(value)
        }
        else{
            let node = new Node(value);
            let curr = this.head;
            pos--
            while(pos >0 && curr.next != this.head){
                curr = curr.next
            }
            let future = curr.next
            curr.next = node;
            node.next = future;
        }
    }
    deleteAtStart(){
        if(this.head == null){
            console.log("there is nothing to delete")
        }
        else{
            let curr = this.head;
            while(curr.next != this.head){
                curr = curr.next;
            }
            curr.next = this.head.next;
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
        }
    }
    deleteAtEnd(){
        if(this.head == null){
            console.log("there is nothing to delete")
        }
        else{
            let curr = this.head;
            let prev = null
            while(curr.next != this.head){
                prev = curr;
                curr = curr.next;
            }
            prev.next = this.head;
            curr.next = null;

        }

    }
    deleteAtPos(pos){

    }
    printList(){
        let curr = this.head;
        console.log(curr.data)
        curr = curr.next
        while(curr != this.head){
            console.log(curr.data)
            curr = curr.next
        }
    }
}
