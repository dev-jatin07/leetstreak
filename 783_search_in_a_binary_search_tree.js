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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans = null;
    function find(node,k){
        if (node === null){
            return;
        }
        if (node.val === k){
            ans = node;
            return;
        }
        if (node.val > k){
            find(node.left,k);
        }else{
            find(node.right,k);
        }
    }
    find(root,val);
    return ans;
};