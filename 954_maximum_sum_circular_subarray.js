/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sum = nums[0];
    let minEnding = nums[0];
    let minRes =nums[0];
    let bestEnding = nums[0];
    let res = nums[0];
    for (let i = 1 ; i < nums.length ; i++){
       sum = sum + nums[i];
       let v1 = bestEnding + nums[i];
       let v2 = nums[i];
       bestEnding = Math.max(v1,v2);
       res = Math.max(res,bestEnding);

       let v3 = minEnding + nums[i];
       let v4 = nums[i];
       minEnding = Math.min(v3,v4);
       minRes =  Math.min(minRes,minEnding);
    }
    if (res < 0){
        return res;
    }
    return Math.max(res,sum-minRes);
    
};