/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    function backtrack (range,k,idx,diary){
        if (diary.length === k){
                res.push([...diary]);
            }
        if (idx > range){
            return;
        }
        
        for ( let i = idx; i <= range;i++){
            if (diary.length === k){
                return;
            }
            diary.push(i);
            backtrack(range,k,i+1,diary);
            diary.pop();
        }
    }
    backtrack(n,k,1,[]);
    return res;
};