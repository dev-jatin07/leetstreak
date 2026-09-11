/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let sum = 0;
    let res = 0;
    let leftSum =0;
    for (let num of nums){
        sum+= num;
    }

    for (let i = 0;i< nums.length -1;i++){
        leftSum += nums[i];
        let rightSum = sum - leftSum;
        if(leftSum >= rightSum){
            res++;
        }
    }
    return res;
};