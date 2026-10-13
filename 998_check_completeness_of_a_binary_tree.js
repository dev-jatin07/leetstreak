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
var isCompleteTree = function(root) {
    if (root === null) return true;
    let q = [root];
    let nullFound = false;

    while (q.length > 0) {
        let t = q.shift();
        if (t === null) {
            nullFound = true;
        } else {
            if (nullFound) return false;
            q.push(t.left);
            q.push(t.right);
        }
    }
    return true;
};