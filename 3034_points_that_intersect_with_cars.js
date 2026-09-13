/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    nums.sort((a, b) => a[0] - b[0]);
    let start1 = nums[0][0];
    let end1 = nums[0][1];
    let count = 0;
    for (i=1 ; i < nums.length ; i++){
        let start2 = nums[i][0];
        let end2 = nums[i][1];
        if (end1 >= start2){
            start1=start1;
            end1=Math.max(end1,end2);
        } else {
            count += end1-start1+1;
            start1=start2
            end1=end2;
        }
        
    }
    count+=end1-start1+1;
    return count;
};