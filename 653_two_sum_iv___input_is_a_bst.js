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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root === null) return false;

    let asc = [];
    let desc = [];

    let t = root;

    while (t) {
        asc.push(t);
        t = t.left;
    }

    t = root;

    while (t) {
        desc.push(t);
        t = t.right;
    }

    function getSmall() {
        if (asc.length === 0) return null;

        let small = asc.pop();
        let rightChild = small.right;

        while (rightChild) {
            asc.push(rightChild);
            rightChild = rightChild.left;
        }

        return small;
    }

    function getBig() {
        if (desc.length === 0) return null;

        let big = desc.pop();
        let leftChild = big.left;

        while (leftChild) {
            desc.push(leftChild);
            leftChild = leftChild.right;
        }

        return big;
    }

    let i = getSmall();
    let j = getBig();

    while (i && j && i.val < j.val) {
        let sum = i.val + j.val;

        if (sum === k) return true;

        if (sum < k) {
            i = getSmall();
        } else {
            j = getBig();
        }
    }

    return false;
};