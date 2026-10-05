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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = [];
    let res= [];
    if (root === null) return [];
    q.push(root);
    while(q.length !== 0){
        let lvlsize = q.length;
        let tmp = [];
        while(lvlsize--){
            let t = q.shift();
            // q.pop();shift dono kaam krderta hai fronrt dekhta bhi h and nikalta bhi h
            tmp.push(t.val)
            if(t.left !== null){
                q.push(t.left);
            }
            if(t.right !== null){
                q.push(t.right);
            }
            
        }
        res.push(tmp);
    }
    return res;
};