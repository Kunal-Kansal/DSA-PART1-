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

let root = new BT('A');
root.set_left(new BT('B'));
root.set_right(new BT('C'));

let rootLeft = root.get_left();
let rootRight = root.get_right();
rootLeft.set_left(new BT('D'));
rootRight.set_right(new BT('E'));

let rootLeftLeft = rootLeft.get_left();
let rootRightRight = rootRight.get_right();
rootLeftLeft.set_right(new BT('F'));
rootRightRight.set_left(new BT('K'));


let ans = [];
function PreOrder(root){
    if(root == null){
        return ;
    }
    ans.push(root.data);
    PreOrder(root.left); 
    PreOrder(root.right);
}

PreOrder(root);
console.log("PreOrder :" ,ans);
ans = [];

function InOrder(root){
    if(root == null){
        return ;
    }
    InOrder(root.left);
    ans.push(root.data);
    InOrder(root.right);

}
InOrder(root);
console.log("InOrder :" ,ans);

ans = [];
function PostOrder(root){
    if(root == null){
        return ;
    }
    PostOrder(root.left);
    PostOrder(root.right);
    ans.push(root.data); 
}
PostOrder(root);
console.log("PostOrder :" ,ans);

 