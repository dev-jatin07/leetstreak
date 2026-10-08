/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
   function isPallindrome(low,high){
    while(low<high){
        if (s[low] != s[high]){
            return false
        }
        low++;
        high--;
    }
    return true;
   }
   function backtrack(start,diary){
    if (start === s.length){
        res.push([...diary]);
        return;
    }
    for (let i = start;i <s.length;i++){
       if(isPallindrome(start,i)) {
            diary.push(s.slice(start,i+1));
            backtrack(i+1,diary);
            diary.pop();
        }
    }
   }
   backtrack(0,[]);
   return res;
};