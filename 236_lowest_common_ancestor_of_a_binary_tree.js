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
    function lca(root,p,q){
        if (root === null) return 0;
        let left = lca(root.left,p,q);
        let right = lca(root.right,p,q);
        let self = 0;
        if (root === p || root === q){
            self =1;
        }
        let total = left + right + self;
        if( total ===2 && ans === null ){
            ans = root;
            
        }
        return total;
    }
    lca(root,p,q);
    return ans;
};