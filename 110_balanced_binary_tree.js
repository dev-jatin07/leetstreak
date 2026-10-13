/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans = true;
    function recursion (root){
        if (root === null) return 0;;
        let left = recursion(root.left);
        let right = recursion(root.right);
         if (Math.abs(left-right) > 1){
            ans = false;
         }
        return 1+ Math.max(left,right);
    }
    recursion(root);
    return ans;
};