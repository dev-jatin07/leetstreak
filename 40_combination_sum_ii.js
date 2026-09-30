/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let sum = 0;
    function backtrack (sum , diary,start){
        if (sum === target){
            res.push([...diary]);
            return;
        }
        if (sum > target) return;
        for (let i = start ; i < candidates.length;i++){
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            sum+=candidates[i];
            diary.push(candidates[i]);
            backtrack(sum,diary,i+1);
            diary.pop();
            sum-=candidates[i];
        }
        return;
    }
    backtrack(sum,[],0);
    return res;
};