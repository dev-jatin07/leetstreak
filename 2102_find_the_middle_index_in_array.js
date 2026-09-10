/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sum =0;
    let left = 0;
    for (let num of nums){
        sum+= num;
    }
    for (let i = 0; i < nums.length; i++){
        if (i > 0){
            left +=nums[i-1];
        }
        let right = sum - nums[i] -left;
        if (left === right){
            return i;
        }
            
    }
    return -1;

};