/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function allcomb(open,close,n,tmp,res){
        if(open === n && close ===n){
            res.push(tmp.join(""));

            return;
        }
        if(open<n){
            tmp.push('(');
            allcomb(open+1,close,n,tmp,res)
            tmp.pop();
        }
        if(close < open){
            tmp.push(')');
            allcomb(open,close+1,n,tmp,res)
            tmp.pop();
        }
    }
    allcomb(0, 0, n, [], res);

    return res;
};