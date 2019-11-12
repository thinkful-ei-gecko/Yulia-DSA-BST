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

function findHeight(bst, left = 0, right = 0) {
  if (!bst)
    return 0;
  
  else if (bst.right===null && bst.left===null )
    return 1;
  
  else if (bst.left)
    left = 1 + findHeight(bst.left, left, right);
  
  else if (bst.right)
    right = 1 + findHeight(bst.right, left, right);
  
  if (left > right)
    return left;
  else 
    return right;
}
console.log(findHeight(BST));
