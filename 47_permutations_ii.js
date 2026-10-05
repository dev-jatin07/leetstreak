/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b);
    let res = [];
    function backtrack(diary,used){
        if (diary.length === nums.length){
            res.push([...diary]);
            return;
        }
        for (let i = 0; i < nums.length ; i++){
            if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
            if (used[i] === true) continue;
            diary.push(nums[i]);
            used[i] = true
            backtrack(diary,used);
            diary.pop();
            used[i] = false;
        }
    }
backtrack([], new Array(nums.length).fill(false));
return res ;
};