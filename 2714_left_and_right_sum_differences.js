/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = new Array(nums.length);
    let rightSum = new Array(nums.length);
    let answer = new Array(nums.length);
    leftSum[0]= 0;
    rightSum[nums.length - 1] = 0;

    for (let i = 0 ; i<nums.length ; i++){
        if (i > 0){
            leftSum[i] = leftSum[i-1] + nums[i-1];
        } 
    }
    for (let i = nums.length-2 ; i >= 0 ;i--){
        rightSum[i] = rightSum[i+1] +nums[i+1];
    }
    for (let i = 0; i <nums.length ;i++){
        answer[i]=Math.abs(leftSum[i]-rightSum[i]);
    }
    return answer;
};