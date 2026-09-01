/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let bestEnding = nums[0];
    let minEnding = nums[0];
    let res = Math.abs(nums[0]);

    for (let i = 1 ; i < nums.length ; i++){
        let v1 = bestEnding + nums[i];
        let v2 = nums[i];

        bestEnding = Math.max(v1,v2);

        let v3 = minEnding + nums[i];
        let v4 = nums[i];

        minEnding = Math.min(v3,v4);

        res = Math.max(res, Math.abs(bestEnding), Math.abs(minEnding));
    }
    return res;
};