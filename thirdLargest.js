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

function findNthLargest(t) {
  let acc = [];

  function traverseTree(bst) {
    if (!bst) {
      return 'Empty tree';
    }
    traverseTree(bst.left);
    acc.push(bst.key);
    traverseTree(bst.right);
  }
  traverseTree(t);
  return acc[acc.length-3];
}
console.log(findNthLargest(BST));