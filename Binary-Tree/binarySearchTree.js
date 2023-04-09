class BT {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    get_left(){
        return this.left;
    }
    get_right(){
        return this.right;
    }
    set_left(node){
        // this.left = new BT(node);
        this.left = node;
        if(node){
            node.parent = this;
        }
    }
    set_right(node){
        // this.right =new BT(node);
        this.right = node;
        if(node){
            node.parent = this;
        }
    }
}


let bstRoot = new BT(4);
bstRoot.set_left(new BT(2));
bstRoot.set_right(new BT(5));
let bstRootLeft = bstRoot.get_left();
bstRootLeft.set_left(new BT(1));
bstRootLeft.set_right(new BT(3));

//      4 
//   2    5
// 1   3

function checkBST(root, min, max) {
    // Base Case
    if(root == null) {
        return true;
    }
    // Safety Check (checking if it is a valid node for BST or not)
    if(root.data < min || root.data > max) {
        return false;
    }
    // // disadvantage of writing this snippet
    // if(root.data > min && root.data < max) {
    //     return true;
    // }
    const leftSubtree = checkBST(root.left, min,root.data - 1);
    const rightSubtree = checkBST(root.right, root.data + 1, max);
    return leftSubtree && rightSubtree;
}

console.log("BST : ",checkBST(bstRoot,-Infinity, +Infinity));