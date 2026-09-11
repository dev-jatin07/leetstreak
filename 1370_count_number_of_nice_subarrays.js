/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    for (let i = 0 ; i < nums.length ; i++){
        nums[i] = nums[i] % 2 == 0 ? 0 : 1;
    }

    let sum = 0;
    let res = 0;
    let map = new Map();
    map.set(0,1);
    for (i=0;i<nums.length;i++ ){
        sum+=nums[i];
        let ques = sum-k;
        let freq =map.get(ques)||0;
        res += freq;
        map.set(sum,(map.get(sum)||0)+1);
    }
    return res
};