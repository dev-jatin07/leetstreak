var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {

        let index = i % n;

        while (stack.length > 0 && stack[stack.length - 1] <= nums[index]) {
            stack.pop();
        }

        if (stack.length > 0) {
            res[index] = stack[stack.length - 1];
        }

        stack.push(nums[index]);
    }

    return res;
};