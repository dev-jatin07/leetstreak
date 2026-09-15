/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    let stack = [];
    let res = new Array(nums2.length).fill(-1);

    let n = nums2.length;

    // Last element ko stack mein push karo
    stack.push(nums2[n - 1]);

    // Right se left
    for (let i = n - 2; i >= 0; i--) {

        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            res[i] = stack[stack.length - 1];
        }

        stack.push(nums2[i]);
    }

    // nums1 ke elements ka answer find karo
    for (let i = 0; i < nums1.length; i++) {

        for (let j = 0; j < nums2.length; j++) {

            if (nums1[i] === nums2[j]) {
                ans.push(res[j]);
                break;
            }
        }
    }

    return ans;
};