/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
let res = [];
let sum = 0;
function backtrack(sum ,start,diary){
 if (sum === n && diary.length === k) {
res.push([...diary]);
return
}
if (sum > n || diary.length === k){
return;}

for (let i = start; i<=9; i++){
diary.push(i);
backtrack(sum + i, i + 1 , diary);
diary.pop();
}
return;
}
backtrack(sum,1,[]);
return res;
};