function tree(t){ //returns the sum of the nodes in the bst
  if(!t){ // if no tree return 0;
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
/* 
given a tree  11
                 /\
                7  15
              /\    /\
             5  9  13  17

call function recursivly
tree(7) + 11 + tree(15)----------
  |                               \
tree(5) + 7 + tree(9)              \
  |                   \             \
0 + 5 + 0 = 5       0 + 9 + 0 = 9    |
      \                 /         __ /
       5 +   7  +    9     __  __/    
              |          /    /  \
      21 + 11 + tree(13) + 15 + tree(17) 
      21 + 11 + 0 + 13 + 0 + 15 + 0 + 17 + 0 = 77
                return 77      
*/