/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    let odd= false;
    let ans=0;
    for(let i =0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }
    for(let [key,value] of map){
        if(value%2===0){
            ans+=value;
        }else{
            ans+=value-1;
            odd=true;
        }
    }
    if(odd=== true){
        ans++;
    }
    return ans;
};