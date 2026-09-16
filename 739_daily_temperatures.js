/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let res = [];
    
    res[n - 1] = 0;
    
    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {

        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            res[i] = 0;
        } else {
            res[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return res;
};