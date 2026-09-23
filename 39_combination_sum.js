/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [];
    function backtrack(idx,sum,diary){
        if(sum === target){
            ans.push([...diary]);
            return;
        }
        if(sum > target){
            return;
        }

        for(let i = idx;i<candidates.length;i++){
            diary.push(candidates[i]);
            backtrack(i,sum+candidates[i],diary)
            diary.pop();
        }
    }
    backtrack(0,0,[]);
    return ans;
};