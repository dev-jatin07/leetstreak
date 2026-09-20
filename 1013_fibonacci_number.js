/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0){
        return 0;
    }
    if( n === 1){
        return 1;
    }
    let ans1 = fib(n-1);
    let ans2 = fib(n-2);
    return ans1+ans2;
};