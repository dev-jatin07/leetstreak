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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let res = false;
    let sum = 0;
    function rootLeaf(root,sum,target){
        if (root === null) return;
        sum +=root.val;
        if(root.left === null && root.right === null){
            if(sum === target){
                res = true;
                return;
            }
        }
        rootLeaf(root.left,sum,target);
        rootLeaf(root.right,sum,target);
        return;
    }
    rootLeaf(root,0,targetSum);
    return res;
};