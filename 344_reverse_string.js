/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    function reverse(low,high){
        if(low>=high){
            return;
        }
        let temp = s[low];
        s[low] = s[high];
        s[high]=temp;

        reverse(low+1,high-1);
    }
    reverse(0,s.length-1);
    return s;
};