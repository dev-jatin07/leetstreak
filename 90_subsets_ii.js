/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    function backtrack(start,diary){
        res.push([...diary]);
        for(let i = start ; i < nums.length ; i++){
            if (i > start && nums[i] === nums[i-1]) continue;
            diary.push(nums[i]);
            backtrack(i+1,diary)
            diary.pop();
        }
        return;
    }
    backtrack(0,[]);
    return res;
};