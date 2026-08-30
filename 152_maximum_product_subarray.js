/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let minEnding = nums[0];
    let maxEnding = nums[0];
    let res = nums[0];
    for (let i = 1 ; i < nums.length ; i++){
        let v1 = nums[i];
        let v2 = nums[i] * minEnding;
        let v3 = nums[i] * maxEnding;
        maxEnding = Math.max( v1 , Math.max(v2,v3));
         minEnding = Math.min( v1 , Math.min(v2,v3));

         res = Math.max(res,Math.max(maxEnding,minEnding));
    }
    return res;
};