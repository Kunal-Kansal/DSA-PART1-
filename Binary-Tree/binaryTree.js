class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class Tree {
    constructor(value) {
        this.data = value;
        this.children = [];
        this.parent = null;
    }
    get_left(){
        return this.children[LEFT];
    }
    get_right(){
        return this.children[RIGHT];
    }
    set_left(node){
        this.children[LEFT] = new Tree(node);
        if(node){
            node.parent = this;
        }
    }
    set_right(node){
        this.children[RIGHT] =new Tree(node);
        if(node){
            node.parent = this;
        }
    }
}
let root = new Tree("A")
root.set_left("B")
root.set_right("C")
let rootLeft = root.get_left();
let rootRight = root.get_right();
rootLeft.set_left("D")
rootRight.set_right("E")
let rootLeftLeft = rootLeft.get_left()
let rootRightRight = rootRight.get_right()
rootLeftLeft.set_right("F")
rootRightRight.set_left("K")

console.log(rootLeft)