/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let sum = 0;
    let map = new Map();
    let res =0;
    map.set(0,1);
    for (let i = 0;i<nums.length;i++){
        sum += nums[i];
        let ques = sum-goal;
        let freq = map.get(ques) || 0;
        res+= freq;
        map.set(sum,(map.get(sum)||0)+1);
    }
    return res;
};