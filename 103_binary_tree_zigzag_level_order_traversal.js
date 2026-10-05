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
var zigzagLevelOrder = function(root) {
    if (root === null ) return [];
    let res = [];
    let q = [];
    q.push(root);
    let leftToright = 1;

    while(q.length !== 0){
        let lvlsize = q.length;
        let tmp = new Array(lvlsize);
        let first = 0;
        let last = lvlsize - 1;
        while(lvlsize--){
            let t = q.shift();

            if(leftToright === 1){
                tmp[first] = t.val;
                first++;
            } else if (leftToright === 0){
                tmp[last] = t.val;
                last--;
            }
            if(t.left !== null){
                q.push(t.left);
            }
            if(t.right !== null){
                q.push(t.right);
            }
        }
        res.push(tmp);
        leftToright = 1-leftToright;
    }
    return res;
};