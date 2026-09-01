/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let bestEnding = nums[0];
    let res = nums[0];
    if (nums.length === 1){
        return res;
    }
    for (let i = 1 ; i < nums.length ; i++){
        let v1 = nums[i]
        if (nums[i-1] < nums[i]){
          v1 = bestEnding + nums[i];
        }
        
        let v2 = nums[i];

        bestEnding = Math.max(v1,v2);
        res = Math.max(res,bestEnding);

    }
    return res;
};