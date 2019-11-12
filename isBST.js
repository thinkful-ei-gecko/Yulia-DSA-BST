const BinarySearchTree = require('./bst_drills');

const BST = new BinarySearchTree();

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);

function isBST(t) {
  if (!t) {//base case
    return true;
  }
  else {
    if (t.left && t.left.key > t.key) {
      return false;
    } else {
      isBST(t.left);
    }
    if (t.right && t.right.key < t.key){
      return false;
    } else {
      isBST(t.right);
    }
    return true;
  }
}

const invalidBST = {key: 3,
  left: {key: 4, left: null, right: null},
  right: {key: 1, left: null, right: null}};

console.log(isBST(BST));