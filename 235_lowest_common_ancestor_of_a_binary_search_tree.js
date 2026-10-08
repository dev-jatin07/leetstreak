/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;
    function find(root,p,q){
        if (root === null) return;
        if (root === p || root === q){
            ans = root;
            return;
        }
        if (root.val < p.val){
            find(root.right,p,q);
        } else if(root.val > q.val){
            find(root.left,p,q);
        }else{
            ans = root;
            return;
        }
    }
    if(p.val <q.val){
        find(root,p,q);
    }else if(p.val >q.val){
        find(root,q,p);
    }
    return ans;
};