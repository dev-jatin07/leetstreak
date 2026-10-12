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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let sum = 0;
    let res = [];
    function rootLeaf(root,sum,diary){
        if(root===null) return;
        sum += root.val;
        diary.push(root.val);
        if(root.left === null && root.right === null){
            if (sum === targetSum){
                res.push([...diary]);
                diary.pop();
                return;
            }
        }
        rootLeaf(root.left,sum,diary);
        rootLeaf(root.right,sum,diary);
        diary.pop();
        return;
    }
    rootLeaf(root,sum,[]);
    return res;
};